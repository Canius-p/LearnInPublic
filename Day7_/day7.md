# DOcker marathon

Docker is a tool for building, shipping, and running distributed applications. It uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries, configuration files, and other resources. This makes it easy to move applications around and to manage their dependencies.

Docker containers are lightweight, standalone, executable packages that include everything needed to run an application, including code, runtime, system tools, system libraries, settings, and versioned dependencies. Containers are created by using a Dockerfile, a text file that contains a set of instructions for building the container.

The Dockerfile is a text file that contains a set of instructions for building the container. The instructions are written in a simple text-based format that is easy to read and write. The Dockerfile specifies the base image to use, the software packages to install, and any other configuration settings that are required to run the application.

The Dockerfile is used to build the container image, which is a snapshot of the application and its dependencies. The image can then be used to create new containers that run the same application, with the same dependencies.

## Dockerfile

A Dockerfile is a text file that contains a set of instructions for building the container. The instructions are written in a simple text-based format that is easy to read and write. The Dockerfile specifies the base image to use, the software packages to install, and any other configuration settings that are required to run the application.

Here is an example of a Dockerfile that installs the Apache HTTP Server and PHP:

```
FROM ubuntu:latest
RUN apt-get update && apt-get install -y apache2 php
EXPOSE 80
CMD ["apache2-foreground"]
```

In this example, the Dockerfile starts with the `FROM` instruction, which specifies the base image to use. In this case, the base image is `ubuntu:latest`, which is the latest version of Ubuntu. The `RUN` instruction is used to execute commands in the container. In this case, the `apt-get update` command is used to update the package index, and the `apt-get install -y apache2 php` command is used to install Apache HTTP Server and PHP. The `EXPOSE` instruction specifies that the container should expose port 80, which is the default port for HTTP. The `CMD` instruction specifies the command to run when the container starts. In this case, the command is `apache2-foreground`, which starts the Apache HTTP Server in the foreground.

To build the container image, you can use the `docker build` command:

```
docker build -t my-apache-php .
```

This command builds the Dockerfile in the current directory and tags the image with the name `my-apache-php`. You can then use this image to create new containers that run the Apache HTTP Server and PHP.

## Docker Compose
