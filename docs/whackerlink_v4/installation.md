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

- Decompress these files in a convenient location (e.g., `Downloads` or `Desktop`). Please note the directory that you export these files to, as we'll use it in the next step.

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

## Need Help?

Join our [Discord community](https://discord.gg/FeQMmc33VV) for support, live assistance, and updates.
:::note
WhackerLink is a free, open-source project maintained by volunteers. Support is provided as time allows, but response times may vary. Please be patient when seeking assistance.
:::