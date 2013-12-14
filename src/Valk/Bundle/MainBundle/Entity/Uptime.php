<?php

namespace Valk\Bundle\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Uptime
 *
 * @ORM\Table(name="uptime")
 * @ORM\Entity
 */
class Uptime
{
    /**
     * @var string
     *
     * @ORM\Column(name="startstring", type="string", length=64, nullable=false)
     */
    private $startstring;

    /**
     * @var integer
     *
     * @ORM\Column(name="uptime", type="bigint", nullable=false)
     */
    private $uptime;

    /**
     * @var integer
     *
     * @ORM\Column(name="maxplayers", type="smallint", nullable=false)
     */
    private $maxplayers;

    /**
     * @var integer
     *
     * @ORM\Column(name="realmid", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $realmid;

    /**
     * @var integer
     *
     * @ORM\Column(name="starttime", type="bigint")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $starttime;



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
}
