---
sidebar_position: 1
---
# WhackerLink Server Installation Guide

## Installing the WhackerLink Server Instance

### 1. Install Dependencies

Before running WhackerLink, ensure the following are installed:

- [.NET 8.0 Runtime](https://aka.ms/dotnet-core-applaunch?missing_runtime=true&arch=x86&rid=win-x86&os=win10&apphost_version=8.0.13)
- [ASP.NET Core Framework](https://aka.ms/dotnet-core-applaunch?framework=Microsoft.AspNetCore.App&framework_version=8.0.0&arch=x86&rid=win-x86&os=win10)
- [MS VC Redistributable](https://aka.ms/vs/17/release/vc_redist.x86.exe)

---

### 2. Download and unpackage the Server

- Download the latest repository from [whackerlink_v4](https://github.com/WhackerLink/whackerlink_v4/releases).
- Save the folder to a convenient location (e.g., `Downloads` or `Desktop`).

#### Unzip the downloaded release

Decompress these files in a convenient location (e.g., `Downloads` or `Desktop`). Please note the directory that you export these files to, as we'll use it in the next step.

---

### 3. Prepare to Run the Server

#### Open Command Prompt:

- Press `Win + R`, type `cmd`, and press `Enter`.

#### Navigate to the Server Directory:

Depending on where you downloaded the server:

- **Downloads:**

  ```cmd
  cd %USERPROFILE%\Downloads\WhackerLinkServer
  ```

- **Desktop:**

  ```cmd
  cd %USERPROFILE%\Desktop\WhackerLinkServer
  ```

- **Other Location:**

  Replace the path accordingly:

  ```cmd
  cd path\to\WhackerLinkServer
  ```

---

### 4. Run the Server

Run the server with the default configuration:

```cmd
.\WhackerLinkServer.exe -c configs\config.example.yml
```

---

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

#### Ports

- Default port: `3000`
- Ensure **TCP and UDP** traffic is allowed through:
  - Your **Windows Firewall**
  - Your **Router** (if self-hosting from home)

:::note
If you're using a **VPS** or **dedicated hosting**, port forwarding is typically pre-configured.
:::

#### Address Binding

- Modify the `address` field:
  - For **VPS**, use the **public IP address**
  - For **local hosting**, use your **internal IPv4** or appropriately routed IP (0.0.0.0 or 127.0.0.1)

:::tip
Avoid using `localhost` for the address value, as its been noted to cause issues with traffic routing.
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