---
sidebar_position: 2
---
# Configuration

The next part in your WhackerLinkServer journey is configuring the instance to suit your needs. This guide will provide a brief overview of the neccessary portions of running a WhackerLinkServer. If you'd like assistance with the full configuration, please visit the advanced configuration docs for more information.

## Configuring WhackerLink v4 Server

### 1. Locate and Edit the Configuration File

- In the server root directory, open a folder called `/configs`. You'll find a file named `config.example.yml`.

By default, the server is configured to run a **single instance**, which is sufficient for most use cases.

---

### 2. Master Server Configuration

- Find the `masters` section.
- Edit the `name` field to your desired master name.  
  *This name may appear in services such as the FiveM radio.*

---

### 3. Network Configuration

Configuring network settings may be challenging depending on your network setup and the number of firewalls in place.

```yaml
    # Port for the master to bind to
      # Manually open this port in Windows Advanced Firewall, TCP port type.
      # If hosted locally, this port needs to be open on your firewall and forwarded to the internal IP of the server.
    port: 3000
    # Address for the master to bind to
      # If hosted locally, bind to internal IP (0.0.0.0, 127.0.0.1, or private IP (Interal Network IP))
      # If hosted remotely on a VPS, bind to the Public IP of your VPS.
    address: 0.0.0.0
```

:::danger
Hosting WhackerLink Server on your personal computer or home network exposes your IP address to anyone who connects, which poses a security risk. Make sure you understand these implications before deploying on a personal network.
:::

#### Setting the Address

- Modify the `address` field:
  - For **VPS**, use the **public IP address**
  - For **local hosting**, use your **internal IPv4** or appropriately routed IP (0.0.0.0 or 127.0.0.1)

:::tip
Avoid using `localhost` for the address value, as its been noted to cause issues with traffic routing.
:::

#### Port Setup

- Default port: `3000`
- Ensure **TCP and UDP** traffic is allowed through:
  - Your **Windows Firewall**
  - Your **Router** (if self-hosting from home)

:::note
If you're using a **VPS** or **dedicated hosting**, port forwarding is typically pre-configured.
:::

---

### 4. Authentication Keys

- In the server root directory, open a folder called `/configs`. You'll find a file named `auth_keys.yml`.

Authentication keys are **required** for secure communication between external modules and your WhackerLinkServer instance.

By default, WhackerLinkServer comes with three pre-defined authKeys. Below is the structure of each key entry:

```yaml
  - enabled: true
    alias: "FiveM Key"
    authKey: "SuperSecretKey1"
```

#### enabled
Type: `bool`  
This will enable or disable the auth key entry

#### alias
Type: `string`  
This is the "friendly name" for the auth key entry. Mostly used for internal organization.

#### authKey
Type: `string`  
This is the authentication key for this entry. This is the security string that will be used in your WhackerLinkFiveM and WhackerLinkConsole codeplugs.

- Once you have completed configuring your auth keys, update your WhackerLinkServer configuration to accomodate for the path of where the `auth_keys.yml` file is stored.

```yaml {6}
    # Auth Key file configuration
    auth:
        # Enable Auth Keys
        enabled: true
        # Path to ACL File
        path: "configs/auth_keys.yml"
        # Reload interval
        reloadInterval: 3000
```

:::tip
You can modify the `reloadInterval` to your liking. This interval is measured in milliseconds. The WhackerLinkServer instance will refresh this value every 3 seconds by default and will display a message in its console stating its done so. You may also set this value to `0` to only load the auth key entries once on startup.
:::

---

## Need Help?

Join our [Discord community](https://discord.gg/FeQMmc33VV) for support, live assistance, and updates.
:::note
WhackerLink is a free, open-source project maintained by volunteers. Support is provided as time allows, but response times may vary. Please be patient when seeking assistance.
:::