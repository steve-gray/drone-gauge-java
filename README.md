# drone-gauge-java
    docker pull eventualconsistency/drone-gauge-java:latest

[![](https://imagelayers.io/badge/eventualconsistency/drone-gauge-java:latest.svg)](https://imagelayers.io/?images=eventualconsistency/drone-gauge-java:latest 'Get your own badge on imagelayers.io')

Docker image for running BDD style tests using [Gauge](http://getgauge.io/) from [ThoughtWorks](http://www.thoughtworks.com/) within [Drone.io](Drone.io) or similiar build solutions.

## Product Versions
The current `latest` version of the image includes:

- Gauge 0.4.0
    - Java Project Plugin
- Maven 3.3.9
- OpenJDK 1.8
- Additional tools:
    - bash
    - curl
    - wget
    - unzip

## Docker Tag Revisions
The following outlines the various Docker tags for this image:

  - latest - The most recent build.
  - Tagged builds:
    - 0.4.0 - Gauge 0.4.0, OpenJDK 1.8 and Maven 3.3.9
    
## Image Details
The image is based on Alpine Linux 3.3 to minimize footprint. During the build process
relevent the system APKs are updated, ensuring the container is up to date as much as
can be expected.

## Installing into Local Drone.io
You can reference the images directly from docker hub, but you'll need to add the `eventualconsistency/*`
images path to your whitelist configuration for your drone instance. 

Another option is to simply clone the image and tag it locally as plugins/`name-goes-here`. 
The steps for this are

    docker pull eventualconsistency/drone-gauge-java:latest
    docker tag eventualconsistency/drone-gauge-java:latest plugins/drone-gauge-java:latest

Where latest is any of the released versions.

