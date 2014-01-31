<?php
/**
 * Created by PhpStorm.
 * User: hyperion
 * Date: 31.01.14
 * Time: 1:11
 */

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * Class AccountRepository
 * @package Valk\AccountBundle\Entity
 * @author Artem Korneev <gabriel.violet.dream@gmail.com>
 */
class AccountRepository extends EntityRepository {

    /**
     * @param string $username
     * @param string $password
     * @return Account
     *
     * @throws \Doctrine\Orm\NonUniqueResultException If the query result is not unique.
     * @throws \Doctrine\Orm\NoResultException        If the query returned no result.
     */
    public function findByUsernameAndPassword($username, $password) {

        $account = new Account();
        $account->setUsername($username);
        $account->setPassword($password);

        return $this->getEntityManager()
            ->createQuery(
                'SELECT a FROM ValkAccountBundle:Account a WHERE a.username = :username AND a.shaPassHash = :shaPassHash'
            )->setParameters(array(
                'username' => $username,
                'shaPassHash'  => $account->getShaPassHash(),
            ))
            ->getSingleResult();
    }
}