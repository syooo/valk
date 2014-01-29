<?php

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AccountBanned
 */
class AccountBanned
{
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $bandate;

    /**
     * @var integer
     */
    private $unbandate;

    /**
     * @var string
     */
    private $bannedby;

    /**
     * @var string
     */
    private $banreason;

    /**
     * @var boolean
     */
    private $active;


    /**
     * Set id
     *
     * @param integer $id
     * @return AccountBanned
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

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
     * Set bandate
     *
     * @param integer $bandate
     * @return AccountBanned
     */
    public function setBandate($bandate)
    {
        $this->bandate = $bandate;

        return $this;
    }

    /**
     * Get bandate
     *
     * @return integer 
     */
    public function getBandate()
    {
        return $this->bandate;
    }

    /**
     * Set unbandate
     *
     * @param integer $unbandate
     * @return AccountBanned
     */
    public function setUnbandate($unbandate)
    {
        $this->unbandate = $unbandate;

        return $this;
    }

    /**
     * Get unbandate
     *
     * @return integer 
     */
    public function getUnbandate()
    {
        return $this->unbandate;
    }

    /**
     * Set bannedby
     *
     * @param string $bannedby
     * @return AccountBanned
     */
    public function setBannedby($bannedby)
    {
        $this->bannedby = $bannedby;

        return $this;
    }

    /**
     * Get bannedby
     *
     * @return string 
     */
    public function getBannedby()
    {
        return $this->bannedby;
    }

    /**
     * Set banreason
     *
     * @param string $banreason
     * @return AccountBanned
     */
    public function setBanreason($banreason)
    {
        $this->banreason = $banreason;

        return $this;
    }

    /**
     * Get banreason
     *
     * @return string 
     */
    public function getBanreason()
    {
        return $this->banreason;
    }

    /**
     * Set active
     *
     * @param boolean $active
     * @return AccountBanned
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * Get active
     *
     * @return boolean 
     */
    public function getActive()
    {
        return $this->active;
    }
}
