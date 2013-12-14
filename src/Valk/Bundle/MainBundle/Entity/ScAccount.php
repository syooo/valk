<?php

namespace Valk\Bundle\MainBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ScAccount
 *
 * @ORM\Table(name="sc_account", uniqueConstraints={@ORM\UniqueConstraint(name="idx_username", columns={"username"})}, indexes={@ORM\Index(name="idx_gmlevel", columns={"gmlevel"})})
 * @ORM\Entity
 */
class ScAccount
{
    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=32, nullable=false)
     */
    private $username;

    /**
     * @var string
     *
     * @ORM\Column(name="sha_pass_hash", type="string", length=40, nullable=false)
     */
    private $shaPassHash;

    /**
     * @var boolean
     *
     * @ORM\Column(name="gmlevel", type="boolean", nullable=false)
     */
    private $gmlevel;

    /**
     * @var string
     *
     * @ORM\Column(name="sessionkey", type="text", nullable=true)
     */
    private $sessionkey;

    /**
     * @var string
     *
     * @ORM\Column(name="v", type="text", nullable=true)
     */
    private $v;

    /**
     * @var string
     *
     * @ORM\Column(name="s", type="text", nullable=true)
     */
    private $s;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="text", nullable=true)
     */
    private $email;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="joindate", type="datetime", nullable=false)
     */
    private $joindate;

    /**
     * @var string
     *
     * @ORM\Column(name="last_ip", type="string", length=30, nullable=false)
     */
    private $lastIp;

    /**
     * @var integer
     *
     * @ORM\Column(name="failed_logins", type="integer", nullable=false)
     */
    private $failedLogins;

    /**
     * @var boolean
     *
     * @ORM\Column(name="locked", type="boolean", nullable=false)
     */
    private $locked;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="last_login", type="datetime", nullable=false)
     */
    private $lastLogin;

    /**
     * @var integer
     *
     * @ORM\Column(name="active_realm_id", type="integer", nullable=false)
     */
    private $activeRealmId;

    /**
     * @var boolean
     *
     * @ORM\Column(name="expansion", type="boolean", nullable=false)
     */
    private $expansion;

    /**
     * @var integer
     *
     * @ORM\Column(name="mutetime", type="bigint", nullable=false)
     */
    private $mutetime;

    /**
     * @var boolean
     *
     * @ORM\Column(name="locale", type="boolean", nullable=false)
     */
    private $locale;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;



    /**
     * Set username
     *
     * @param string $username
     * @return ScAccount
     */
    public function setUsername($username)
    {
        $this->username = $username;

        return $this;
    }

    /**
     * Get username
     *
     * @return string 
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set shaPassHash
     *
     * @param string $shaPassHash
     * @return ScAccount
     */
    public function setShaPassHash($shaPassHash)
    {
        $this->shaPassHash = $shaPassHash;

        return $this;
    }

    /**
     * Get shaPassHash
     *
     * @return string 
     */
    public function getShaPassHash()
    {
        return $this->shaPassHash;
    }

    /**
     * Set gmlevel
     *
     * @param boolean $gmlevel
     * @return ScAccount
     */
    public function setGmlevel($gmlevel)
    {
        $this->gmlevel = $gmlevel;

        return $this;
    }

    /**
     * Get gmlevel
     *
     * @return boolean 
     */
    public function getGmlevel()
    {
        return $this->gmlevel;
    }

    /**
     * Set sessionkey
     *
     * @param string $sessionkey
     * @return ScAccount
     */
    public function setSessionkey($sessionkey)
    {
        $this->sessionkey = $sessionkey;

        return $this;
    }

    /**
     * Get sessionkey
     *
     * @return string 
     */
    public function getSessionkey()
    {
        return $this->sessionkey;
    }

    /**
     * Set v
     *
     * @param string $v
     * @return ScAccount
     */
    public function setV($v)
    {
        $this->v = $v;

        return $this;
    }

    /**
     * Get v
     *
     * @return string 
     */
    public function getV()
    {
        return $this->v;
    }

    /**
     * Set s
     *
     * @param string $s
     * @return ScAccount
     */
    public function setS($s)
    {
        $this->s = $s;

        return $this;
    }

    /**
     * Get s
     *
     * @return string 
     */
    public function getS()
    {
        return $this->s;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return ScAccount
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set joindate
     *
     * @param \DateTime $joindate
     * @return ScAccount
     */
    public function setJoindate($joindate)
    {
        $this->joindate = $joindate;

        return $this;
    }

    /**
     * Get joindate
     *
     * @return \DateTime 
     */
    public function getJoindate()
    {
        return $this->joindate;
    }

    /**
     * Set lastIp
     *
     * @param string $lastIp
     * @return ScAccount
     */
    public function setLastIp($lastIp)
    {
        $this->lastIp = $lastIp;

        return $this;
    }

    /**
     * Get lastIp
     *
     * @return string 
     */
    public function getLastIp()
    {
        return $this->lastIp;
    }

    /**
     * Set failedLogins
     *
     * @param integer $failedLogins
     * @return ScAccount
     */
    public function setFailedLogins($failedLogins)
    {
        $this->failedLogins = $failedLogins;

        return $this;
    }

    /**
     * Get failedLogins
     *
     * @return integer 
     */
    public function getFailedLogins()
    {
        return $this->failedLogins;
    }

    /**
     * Set locked
     *
     * @param boolean $locked
     * @return ScAccount
     */
    public function setLocked($locked)
    {
        $this->locked = $locked;

        return $this;
    }

    /**
     * Get locked
     *
     * @return boolean 
     */
    public function getLocked()
    {
        return $this->locked;
    }

    /**
     * Set lastLogin
     *
     * @param \DateTime $lastLogin
     * @return ScAccount
     */
    public function setLastLogin($lastLogin)
    {
        $this->lastLogin = $lastLogin;

        return $this;
    }

    /**
     * Get lastLogin
     *
     * @return \DateTime 
     */
    public function getLastLogin()
    {
        return $this->lastLogin;
    }

    /**
     * Set activeRealmId
     *
     * @param integer $activeRealmId
     * @return ScAccount
     */
    public function setActiveRealmId($activeRealmId)
    {
        $this->activeRealmId = $activeRealmId;

        return $this;
    }

    /**
     * Get activeRealmId
     *
     * @return integer 
     */
    public function getActiveRealmId()
    {
        return $this->activeRealmId;
    }

    /**
     * Set expansion
     *
     * @param boolean $expansion
     * @return ScAccount
     */
    public function setExpansion($expansion)
    {
        $this->expansion = $expansion;

        return $this;
    }

    /**
     * Get expansion
     *
     * @return boolean 
     */
    public function getExpansion()
    {
        return $this->expansion;
    }

    /**
     * Set mutetime
     *
     * @param integer $mutetime
     * @return ScAccount
     */
    public function setMutetime($mutetime)
    {
        $this->mutetime = $mutetime;

        return $this;
    }

    /**
     * Get mutetime
     *
     * @return integer 
     */
    public function getMutetime()
    {
        return $this->mutetime;
    }

    /**
     * Set locale
     *
     * @param boolean $locale
     * @return ScAccount
     */
    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

    /**
     * Get locale
     *
     * @return boolean 
     */
    public function getLocale()
    {
        return $this->locale;
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
