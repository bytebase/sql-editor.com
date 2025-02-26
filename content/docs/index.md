---
title: What is SQL Editor
---

**SQL Editor** is an open source, browser-based SQL editor. It supports all mainstream SQL and non-SQL databases.

![sql-editor](/sql-editor.webp)

## Key features

- **Open Source and self-hosted**: The [SQL Editor codebase](https://github.com/bytebase/bytebase) is open source and can be self-hosted.
- **Easy installation**: Single docker command to start in seconds.
- **Online**: Browser-based, no need to install any client software.
- **Database Access Control**: Fine-grained access control for different databases.
- **Dynamic Data Masking**: Mask sensitive data on the fly.
- **AI Assistant**: AI assistant to help you write SQL queries, explain queries, and more.

## Installation

```bash
docker run --rm --init \
 --name bytebase \
 --publish 8080:8080 --pull always \
 --volume ~/.bytebase/data:/var/opt/bytebase \
 bytebase/bytebase:3.4.0
```

Once you see the Bytebase logo, you can access the console at http://localhost:8080.

```bash
██████╗ ██╗   ██╗████████╗███████╗██████╗  █████╗ ███████╗███████╗
██╔══██╗╚██╗ ██╔╝╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝
██████╔╝ ╚████╔╝    ██║   █████╗  ██████╔╝███████║███████╗█████╗
██╔══██╗  ╚██╔╝     ██║   ██╔══╝  ██╔══██╗██╔══██║╚════██║██╔══╝
██████╔╝   ██║      ██║   ███████╗██████╔╝██║  ██║███████║███████╗
╚═════╝    ╚═╝      ╚═╝   ╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝

Version 3.4.0 has started on port 8080 🚀
```

Then in the setup wizard, after you create the admin account, select `SQL Editor Mode` to start using SQL Editor.

For more advanced setup, please refer to [self-hosted guide](https://www.bytebase.com/docs/get-started/self-host/).

## Usage

Please refer to [SQL Editor guide](https://www.bytebase.com/docs/sql-editor/overview) for more details.

## Contact

Please send mail to [support@bytebase.com](mailto:support@bytebase.com) for any questions.
