<?php
/**
 * Created by PhpStorm.
 * User: hyperion
 * Date: 31.01.14
 * Time: 10:59
 */

namespace Valk\UserBundle\EventListener;

use FOS\UserBundle\FOSUserEvents;
use FOS\UserBundle\Event\FilterUserResponseEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Doctrine\ORM\EntityManager;
use Valk\AccountBundle\Entity\Account;

/**
 * Class RegistrationConfirmationListener
 * @package Valk\UserBundle\EventListener
 * @author Artem Korneev <gabriel.violet.dream@gmail.com>
 */
class RegistrationConfirmationListener implements EventSubscriberInterface {

    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $realmd_em;

    /**
     * @param EntityManager $realmd_em
     */
    public function __construct(EntityManager $realmd_em) {
        $this->realmd_em = $realmd_em;
    }

    /**
     * @return array
     */
    public static function getSubscribedEvents()
    {
        return array(
            FOSUserEvents::REGISTRATION_CONFIRMED => 'onUserRegistrationConfirmed',
        );
    }

    /**
     * @param FilterUserResponseEvent $event
     */
    public function onUserRegistrationConfirmed(FilterUserResponseEvent $event)
    {
        /* @var $user  \Valk\UserBundle\Entity\User */
        $user = $event->getUser();

        /* @var $account Account */
        $account = $this->realmd_em->getRepository('ValkAccountBundle:Account')->find($user->getAccountsIds()[0]);

        if($account instanceof Account) {
            $account->setLocked(false);
            $this->realmd_em->persist($account);
            $this->realmd_em->flush();
        }
    }
} 