<?php

namespace Valk\Bundle\AccountBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\UserInterface as UserInterface;
use FOS\UserBundle\Model\GroupableInterface as GroupableInterface;
use FOS\UserBundle\Model\GroupInterface as GroupInterface;
use Doctrine\Common\Collections\Collection;

/**
 * Account
 *
 * @ORM\Table(name="account", uniqueConstraints={@ORM\UniqueConstraint(name="idx_username", columns={"username"})}, indexes={@ORM\Index(name="idx_gmlevel", columns={"gmlevel"})})
 * @ORM\Entity
 */
class Account implements UserInterface, GroupableInterface
{
    /**
     * @var string
     *
     * @ORM\Column(name="username", type="string", length=32, nullable=false)
     */
    protected $username;

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
     * @ORM\Column(name="email", type="text", nullable=true)
     */
    protected $email;

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
     * @var boolean
     *
     * @ORM\Column(name="locked", type="boolean", nullable=false)
     */
    protected $locked;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="last_login", type="datetime", nullable=false)
     */
    protected $lastLogin;

    /**
     * @var integer
     *
     * @ORM\Column(name="active_realm_id", type="integer", nullable=false)
     */
    private $activeRealmId;

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
     * @var string
     *
     * @ORM\Column(name="reg_ip", type="string", length=30, nullable=false)
     */
    private $regIp;

    /**
     * @var string
     *
     * @ORM\Column(name="client_info", type="string", length=30, nullable=false)
     */
    private $clientInfo;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;


    /**
     * Set username
     *
     * @param string $username
     * @return Account
     */
    public function setUsername($username)
    {
        $this->username = $username;
        $this->getFOSUser()->setUsername($username);

        return $this;
    }

    /**
     * @inheritDoc
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Set shaPassHash
     *
     * @param string $shaPassHash
     * @return Account
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
     * @return Account
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
     * Set email
     *
     * @param string $email
     * @return Account
     */
    public function setEmail($email)
    {
        $this->email = $email;
        $this->getFOSUser()->setEmail($email);

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
     * @return Account
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
     * @return Account
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
     * Set locked
     *
     * @param boolean $locked
     * @return Account
     */
//    public function setLocked($locked)
//    {
//        $this->locked = $locked;
//
//        return $this;
//    }

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
     * @return Account
     */
//    public function setLastLogin(\DateTime $lastLogin = null)
//    {
//        $this->lastLogin = $lastLogin;
//
//        return $this;
//    }

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
     * @return Account
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
     * Set mutetime
     *
     * @param integer $mutetime
     * @return Account
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
     * @return Account
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
     * Set regIp
     *
     * @param string $regIp
     * @return Account
     */
    public function setRegIp($regIp)
    {
        $this->regIp = $regIp;

        return $this;
    }

    /**
     * Get regIp
     *
     * @return string 
     */
    public function getRegIp()
    {
        return $this->regIp;
    }

    /**
     * Set clientInfo
     *
     * @param string $clientInfo
     * @return Account
     */
    public function setClientInfo($clientInfo)
    {
        $this->clientInfo = $clientInfo;

        return $this;
    }

    /**
     * Get clientInfo
     *
     * @return string 
     */
    public function getClientInfo()
    {
        return $this->clientInfo;
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
     * @inheritDoc
     */
    public function getSalt()
    {
        return $this->username . ':';
    }

    /**
     * @inheritDoc
     */
    public function getPassword()
    {
        return $this->shaPassHash;
    }

    /**
     * @ORM\OneToOne(targetEntity="FOSUser", cascade={"persist"})
     * @ORM\JoinColumn(name="id", referencedColumnName="id")
     */
    private $FOSUser;

    /**
     * @return FOSUser
     */
    public function getFOSUser()
    {
        return $this->FOSUser;
    }

    public function setUsernameCanonical($usernameCanonical)
    {
        $this->getFOSUser()->setUsernameCanonical($usernameCanonical);

        return $this;
    }

    public function getUsernameCanonical()
    {
        //return $this->getFOSUser()->getUsernameCanonical();
        return $this->username;
    }

    ////////////////////////////////////////////////////////////////////////////
    // TODO CHECK ALL GETTERS/SETTERS
    ////////////////////////////////////////////////////////////////////////////

    public function __construct()
    {
        //$this->salt = base_convert(sha1(uniqid(mt_rand(), true)), 16, 36);
        //$this->enabled = false;
        //$this->locked = false;
        //$this->expired = false;
        //$this->roles = array();
        //$this->credentialsExpired = false;
        $this->activeRealmId = 0;
        $this->mutetime = 0;
        $this->locale = 0;
        $this->gmlevel = 0;
        $this->lastIp = '0.0.0.0';
        $this->regIp = '0.0.0.0';
        $this->clientInfo = 'os;version;build';
        $this->locked = 0;
        $this->FOSUser = new FOSUser();
        //$this->getFOSUser()->getUsernameCanonical($this->username);
        //var_dump($this);
    }

    public function addRole($role)
    {
        $this->getFOSUser()->addRole($role);

        return $this;
    }

    /**
     * Serializes the user.
     *
     * The serialized data have to contain the fields used by the equals method and the username.
     *
     * @return string
     */
    public function serialize()
    {
        return serialize(array(
            $this->username,
            $this->locked,
            $this->id
        ));
    }

    /**
     * Unserializes the user.
     *
     * @param string $serialized
     */
    public function unserialize($serialized)
    {
        $data = unserialize($serialized);
        // add a few extra elements in the array to ensure that we have enough keys when unserializing
        // older data which does not include all properties.
        $data = array_merge($data, array_fill(0, 2, null));

        list(
            $this->username,
            $this->locked,
            $this->id
            ) = $data;
    }

    /**
     * Removes sensitive data from the user.
     */
    public function eraseCredentials()
    {
        //$this->shaPassHash = null;
    }

    public function getEmailCanonical()
    {
        return $this->getFOSUser()->getEmailCanonical();
    }

    public function getPlainPassword()
    {
        return $this->getFOSUser()->getPlainPassword();
    }

    public function getConfirmationToken()
    {
        return $this->getFOSUser()->getConfirmationToken();
    }

    /**
     * Returns the user roles
     *
     * @return array The roles
     */
    public function getRoles()
    {
        return $this->getFOSUser()->getRoles();
    }

    /**
     * Never use this to check if this user has access to anything!
     *
     * Use the SecurityContext, or an implementation of AccessDecisionManager
     * instead, e.g.
     *
     *         $securityContext->isGranted('ROLE_USER');
     *
     * @param string $role
     *
     * @return boolean
     */
    public function hasRole($role)
    {
        return $this->getFOSUser()->hasRole($role);
    }

    public function isAccountNonExpired()
    {
        return $this->getFOSUser()->isAccountNonExpired();
    }

    public function isAccountNonLocked()
    {
        return !$this->getFOSUser()->isLocked();
    }

    public function isCredentialsNonExpired()
    {
        return $this->getFOSUser()->isCredentialsNonExpired();
    }

    public function isCredentialsExpired()
    {
        return !$this->isCredentialsNonExpired();
    }

    public function isEnabled()
    {
        return $this->getFOSUser()->isEnabled();
    }

    public function isExpired()
    {
        return !$this->isAccountNonExpired();
    }

    public function isLocked()
    {
        return !$this->isAccountNonLocked();
    }

    public function isSuperAdmin()
    {
        return $this->hasRole(static::ROLE_SUPER_ADMIN);
    }

    public function isUser(UserInterface $user = null)
    {
        return null !== $user && $this->getId() === $user->getId();
    }

    public function removeRole($role)
    {
        $this->getFOSUser()->removeRole($role);

        return $this;
    }

    /**
     * @param \DateTime $date
     *
     * @return Account
     */
    public function setCredentialsExpireAt(\DateTime $date = null)
    {
        $this->getFOSUser()->setCredentialsExpireAt($date);

        return $this;
    }

    /**
     * @param boolean $boolean
     *
     * @return Account
     */
    public function setCredentialsExpired($boolean)
    {
        $this->getFOSUser()->setCredentialsExpired($boolean);

        return $this;
    }

    public function setEmailCanonical($emailCanonical)
    {
        $this->getFOSUser()->setEmailCanonical($emailCanonical);

        return $this;
    }

    public function setEnabled($boolean)
    {
        //var_dump($this);

        $this->getFOSUser()->setEnabled($boolean);



        return $this;
    }

    /**
     * Sets this user to expired.
     *
     * @param Boolean $boolean
     *
     * @return Account
     */
    public function setExpired($boolean)
    {
        $this->getFOSUser()->setExpired($boolean);

        return $this;
    }

    /**
     * @param \DateTime $date
     *
     * @return Account
     */
    public function setExpiresAt(\DateTime $date = null)
    {
        $this->getFOSUser()->setExpiresAt($date);

        return $this;
    }

    public function setPassword($password)
    {
        $this->setShaPassHash($password);

        return $this;
    }

    public function setSuperAdmin($boolean)
    {
        if (true === $boolean) {
            $this->addRole(static::ROLE_SUPER_ADMIN);
        } else {
            $this->removeRole(static::ROLE_SUPER_ADMIN);
        }

        return $this;
    }

    public function setPlainPassword($password)
    {
        $this->getFOSUser()->setPlainPassword($password);

        return $this;
    }

    public function setLastLogin(\DateTime $time = null)
    {
        $this->getFOSUser()->setLastLogin($time);

        return $this->getFOSUser();
    }

    public function setLocked($boolean)
    {
        $this->getFOSUser()->setLocked($boolean);

        return $this;
    }

    public function setConfirmationToken($confirmationToken)
    {
        $this->getFOSUser()->setConfirmationToken($confirmationToken);

        return $this;
    }

    public function setPasswordRequestedAt(\DateTime $date = null)
    {
        $this->getFOSUser()->setPasswordRequestedAt($date);

        return $this;
    }

    /**
     * Gets the timestamp that the user requested a password reset.
     *
     * @return null|\DateTime
     */
    public function getPasswordRequestedAt()
    {
        return $this->getFOSUser()->getPasswordRequestedAt();
    }

    public function isPasswordRequestNonExpired($ttl)
    {
        return $this->getPasswordRequestedAt() instanceof \DateTime &&
        $this->getPasswordRequestedAt()->getTimestamp() + $ttl > time();
    }

    public function setRoles(array $roles)
    {
        $this->getFOSUser()->setRoles($roles);

        return $this;
    }

    /**
     * Gets the groups granted to the user.
     *
     * @return Collection
     */
    public function getGroups()
    {
        return $this->getFOSUser()->getGroups();
    }

    public function getGroupNames()
    {
        return $this->getFOSUser()->getGroupNames();
    }

    public function hasGroup($name)
    {
        return in_array($name, $this->getGroupNames());
    }

    public function addGroup(GroupInterface $group)
    {
        if (!$this->getGroups()->contains($group)) {
            $this->getGroups()->add($group);
        }

        return $this;
    }

    public function removeGroup(GroupInterface $group)
    {
        if ($this->getGroups()->contains($group)) {
            $this->getGroups()->removeElement($group);
        }

        return $this;
    }

    public function __toString()
    {
        return (string) $this->getUsername();
    }

}
