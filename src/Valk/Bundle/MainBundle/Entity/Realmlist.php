<?php

namespace Valk\Bundle\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Realmlist
 *
 * @ORM\Table(name="realmlist", uniqueConstraints={@ORM\UniqueConstraint(name="idx_name", columns={"name"})})
 * @ORM\Entity
 */
class Realmlist
{
    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=32, nullable=false)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=32, nullable=false)
     */
    private $address;

    /**
     * @var integer
     *
     * @ORM\Column(name="port", type="integer", nullable=false)
     */
    private $port;

    /**
     * @var boolean
     *
     * @ORM\Column(name="icon", type="boolean", nullable=false)
     */
    private $icon;

    /**
     * @var boolean
     *
     * @ORM\Column(name="color", type="boolean", nullable=false)
     */
    private $color;

    /**
     * @var boolean
     *
     * @ORM\Column(name="timezone", type="boolean", nullable=false)
     */
    private $timezone;

    /**
     * @var boolean
     *
     * @ORM\Column(name="allowedSecurityLevel", type="boolean", nullable=false)
     */
    private $allowedsecuritylevel;

    /**
     * @var float
     *
     * @ORM\Column(name="population", type="float", precision=10, scale=0, nullable=false)
     */
    private $population;

    /**
     * @var string
     *
     * @ORM\Column(name="realmbuilds", type="string", length=64, nullable=false)
     */
    private $realmbuilds;

    /**
     * @var string
     *
     * @ORM\Column(name="revision", type="string", length=5, nullable=false)
     */
    private $revision;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;



    /**
     * Set name
     *
     * @param string $name
     * @return Realmlist
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set address
     *
     * @param string $address
     * @return Realmlist
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address
     *
     * @return string 
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set port
     *
     * @param integer $port
     * @return Realmlist
     */
    public function setPort($port)
    {
        $this->port = $port;

        return $this;
    }

    /**
     * Get port
     *
     * @return integer 
     */
    public function getPort()
    {
        return $this->port;
    }

    /**
     * Set icon
     *
     * @param boolean $icon
     * @return Realmlist
     */
    public function setIcon($icon)
    {
        $this->icon = $icon;

        return $this;
    }

    /**
     * Get icon
     *
     * @return boolean 
     */
    public function getIcon()
    {
        return $this->icon;
    }

    /**
     * Set color
     *
     * @param boolean $color
     * @return Realmlist
     */
    public function setColor($color)
    {
        $this->color = $color;

        return $this;
    }

    /**
     * Get color
     *
     * @return boolean 
     */
    public function getColor()
    {
        return $this->color;
    }

    /**
     * Set timezone
     *
     * @param boolean $timezone
     * @return Realmlist
     */
    public function setTimezone($timezone)
    {
        $this->timezone = $timezone;

        return $this;
    }

    /**
     * Get timezone
     *
     * @return boolean 
     */
    public function getTimezone()
    {
        return $this->timezone;
    }

    /**
     * Set allowedsecuritylevel
     *
     * @param boolean $allowedsecuritylevel
     * @return Realmlist
     */
    public function setAllowedsecuritylevel($allowedsecuritylevel)
    {
        $this->allowedsecuritylevel = $allowedsecuritylevel;

        return $this;
    }

    /**
     * Get allowedsecuritylevel
     *
     * @return boolean 
     */
    public function getAllowedsecuritylevel()
    {
        return $this->allowedsecuritylevel;
    }

    /**
     * Set population
     *
     * @param float $population
     * @return Realmlist
     */
    public function setPopulation($population)
    {
        $this->population = $population;

        return $this;
    }

    /**
     * Get population
     *
     * @return float 
     */
    public function getPopulation()
    {
        return $this->population;
    }

    /**
     * Set realmbuilds
     *
     * @param string $realmbuilds
     * @return Realmlist
     */
    public function setRealmbuilds($realmbuilds)
    {
        $this->realmbuilds = $realmbuilds;

        return $this;
    }

    /**
     * Get realmbuilds
     *
     * @return string 
     */
    public function getRealmbuilds()
    {
        return $this->realmbuilds;
    }

    /**
     * Set revision
     *
     * @param string $revision
     * @return Realmlist
     */
    public function setRevision($revision)
    {
        $this->revision = $revision;

        return $this;
    }

    /**
     * Get revision
     *
     * @return string 
     */
    public function getRevision()
    {
        return $this->revision;
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
}
