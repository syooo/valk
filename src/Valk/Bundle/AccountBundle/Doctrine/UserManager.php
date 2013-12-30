<?php
/**
 * Created by PhpStorm.
 * User: syooo
 * Date: 15.12.13
 * Time: 21:33
 */

namespace Valk\Bundle\AccountBundle\Doctrine;

use FOS\UserBundle\Doctrine\UserManager as FOSUserManager;
use FOS\UserBundle\Model\UserInterface;

class UserManager extends FOSUserManager
{
    /**
     * Finds a user by email
     *
     * @param string $email
     *
     * @return UserInterface
     */
    public function findUserByEmail($email)
    {
        return $this->findUserBy(array('email' => $this->canonicalizeEmail($email)));
    }

    /**
     * Finds a user by username
     *
     * @param string $username
     *
     * @return UserInterface
     */
    public function findUserByUsername($username)
    {
        return $this->findUserBy(array('username' => $this->canonicalizeUsername($username)));
    }
} 