<?php
/**
 * Created by PhpStorm.
 * User: hyperion
 * Date: 31.01.14
 * Time: 0:28
 */

namespace Valk\UserBundle\EventListener;

use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Validator\Validator;
use Doctrine\ORM\EntityManager;
use Doctrine\Orm\NoResultException;
use Valk\AccountBundle\Entity\Account;

/**
 * Class AccountAddingListener
 * @package Valk\UserBundle\EventListener
 * @author Artem Korneev <gabriel.violet.dream@gmail.com>
 */
class AccountAddingListener implements EventSubscriberInterface {

    /**
     * @var EntityManager $default_em
     */
    private $default_em;

    /**
     * @var EntityManager $realmd_em
     */
    private $realmd_em;

    /**
     * @var Validator $validator
     */
    private $validator;

    /**
     * @param EntityManager $default_em
     * @param EntityManager $realmd_em
     * @param Validator $validator
     */
    public function __construct(EntityManager $default_em, EntityManager $realmd_em, Validator $validator)
    {
        $this->default_em = $default_em;
        $this->realmd_em = $realmd_em;
        $this->validator = $validator;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return array(
            FOSUserEvents::REGISTRATION_COMPLETED => 'onUserRegistrationSuccess',
        );
    }

    /**
     * @param FilterUserResponseEvent $event
     */
    public function onUserRegistrationSuccess(FilterUserResponseEvent $event)
    {
        /* @var $user  \Valk\UserBundle\Entity\User */
        $user = $event->getUser();

        try {
            $account = $this->realmd_em->getRepository('ValkAccountBundle:Account')
                ->findByUsernameAndPassword($user->getUsername(), $user->getPlainPassword());
        } catch (NoResultException $e) {
            $account = new Account();
            $account->setUsername($user->getUsername());
            $account->setPassword($user->getPlainPassword());
            $account->setEmail($user->getEmailCanonical());
            $account->setLocked(true);
            $errors = $this->validator->validate($account);

            if(count($errors) == 0) {
                $this->realmd_em->persist($account);
                $this->realmd_em->flush();
            } else {
                unset($account);
            }
        }

        if(isset($account)) {
            $user->addAccountId($account->getId());
            $this->default_em->persist($user);
            $this->default_em->flush();
        }
    }


} 