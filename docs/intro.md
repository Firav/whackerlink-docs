---
sidebar_position: 1
---
# WhackerLink Server Installation Guide

## Installing the WhackerLink Server Instance

### 1. Install Dependencies

Before running WhackerLink, ensure the following are installed:

- [.NET 8.0 Runtime](https://aka.ms/dotnet-core-applaunch?missing_runtime=true&arch=x64&rid=win-x64&os=win10&apphost_version=8.0.11)
- [ASP.NET Core Framework](https://aka.ms/dotnet-core-applaunch?framework=Microsoft.AspNetCore.App&framework_version=8.0.0&arch=x64&rid=win-x64&os=win10)

---

### 2. Download the Server

- Download the latest repository from [whackerlink_v4](https://github.com/WhackerLink/whackerlink_v4/archive/refs/heads/main.zip).
- Save the folder to a convenient location (e.g., `Downloads` or `Desktop`).

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
WhackerLinkServer.exe -c config.example.yml
```

---

## Configuring WhackerLink v4 Server

### 1. Locate and Edit the Configuration File

- In the server root directory, open `config.example.yml`.

By default, the server is configured to run a **single instance**, which is sufficient for most use cases.

---

### 2. Master Server Configuration

- Find the `masters` section.
- Edit the `name` field to your desired name.  
  *This name appears in services such as the FiveM radio and the server console.*

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

- In the root directory, find and open `auth_keys.yml`.

Authentication keys are **required** for secure communication between external modules and your WhackerLink server instance.

> 🔒 More detailed information on setting up auth keys will be provided soon.

---

## Need Help?

Join our [Discord community](https://discord.gg/FeQMmc33VV) for support, live assistance, and updates.
