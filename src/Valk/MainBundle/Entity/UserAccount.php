<?php

namespace Valk\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserAccount
 */
class UserAccount
{
    /**
     * @var integer
     */
    protected $id;

    /**
     * @var User
     */
    protected $user;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }
}
