<?php

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * IpBanned
 */
class IpBanned
{
    /**
     * @var string
     */
    private $ip;

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
     * Set ip
     *
     * @param string $ip
     * @return IpBanned
     */
    public function setIp($ip)
    {
        $this->ip = $ip;

        return $this;
    }

    /**
     * Get ip
     *
     * @return string 
     */
    public function getIp()
    {
        return $this->ip;
    }

    /**
     * Set bandate
     *
     * @param integer $bandate
     * @return IpBanned
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
     * @return IpBanned
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
     * @return IpBanned
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
     * @return IpBanned
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
}
