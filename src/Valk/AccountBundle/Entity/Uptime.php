<?php

namespace Valk\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Uptime
 */
class Uptime
{
    /**
     * @var integer
     */
    private $realmid;

    /**
     * @var integer
     */
    private $starttime;

    /**
     * @var string
     */
    private $startstring;

    /**
     * @var integer
     */
    private $uptime;

    /**
     * @var integer
     */
    private $maxplayers;


    /**
     * Set realmid
     *
     * @param integer $realmid
     * @return Uptime
     */
    public function setRealmid($realmid)
    {
        $this->realmid = $realmid;

        return $this;
    }

    /**
     * Get realmid
     *
     * @return integer 
     */
    public function getRealmid()
    {
        return $this->realmid;
    }

    /**
     * Set starttime
     *
     * @param integer $starttime
     * @return Uptime
     */
    public function setStarttime($starttime)
    {
        $this->starttime = $starttime;

        return $this;
    }

    /**
     * Get starttime
     *
     * @return integer 
     */
    public function getStarttime()
    {
        return $this->starttime;
    }

    /**
     * Set startstring
     *
     * @param string $startstring
     * @return Uptime
     */
    public function setStartstring($startstring)
    {
        $this->startstring = $startstring;

        return $this;
    }

    /**
     * Get startstring
     *
     * @return string 
     */
    public function getStartstring()
    {
        return $this->startstring;
    }

    /**
     * Set uptime
     *
     * @param integer $uptime
     * @return Uptime
     */
    public function setUptime($uptime)
    {
        $this->uptime = $uptime;

        return $this;
    }

    /**
     * Get uptime
     *
     * @return integer 
     */
    public function getUptime()
    {
        return $this->uptime;
    }

    /**
     * Set maxplayers
     *
     * @param integer $maxplayers
     * @return Uptime
     */
    public function setMaxplayers($maxplayers)
    {
        $this->maxplayers = $maxplayers;

        return $this;
    }

    /**
     * Get maxplayers
     *
     * @return integer 
     */
    public function getMaxplayers()
    {
        return $this->maxplayers;
    }
}
