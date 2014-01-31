<?php

namespace Valk\UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Valk\AccountBundle\Entity\Account;

/**
 * Class User
 * @package Valk\UserBundle\Entity
 * @author Artem Korneev <gabriel.violet.dream@gmail.com>
 */
class User extends BaseUser
{
    /**
     * @var integer
     */
    protected $id;

    /**
     * @var array
     */
    protected $accounts_ids = array();

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return array
     */
    public function getAccountsIds()
    {
        return $this->accounts_ids;
    }

    /**
     * @param array $accounts_ids
     * @return User
     */
    public function setAccountsIds(array $accounts_ids)
    {
        $this->accounts_ids = $accounts_ids;

        return $this;
    }

    /**
     * @param int $account_id
     * @return User
     */
    public function addAccountId($account_id) {
        $this->accounts_ids[] = $account_id;

        return $this;
    }

    /**
     * @param Account $account
     * @return User
     */
    public function addAccount(Account $account) {
        $this->accounts_ids[] = $account->getId();

        return $this;
    }

    /**
     * Does not remove plain password from the user. It is important, for creating account with same password.
     */
    public function eraseCredentials()
    {
    }
}
