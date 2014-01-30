<?php

namespace Valk\UserBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;

/**
 * User
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
     */
    public function setAccountsIds($accounts_ids)
    {
        $this->accounts_ids = $accounts_ids;
    }
}
