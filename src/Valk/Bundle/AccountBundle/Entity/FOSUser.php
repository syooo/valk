<?php

namespace Valk\Bundle\AccountBundle\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * Fake class just to provide data to Account
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 */
class FOSUser extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;
}