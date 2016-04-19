# drone-gauge-java

[![Build Status](http://beta.drone.io/api/badges/drone-plugins/drone-docker/status.svg)](http://beta.drone.io/drone-plugins/drone-docker)
[![Coverage Status](https://aircover.co/badges/drone-plugins/drone-docker/coverage.svg)](https://aircover.co/drone-plugins/drone-docker)
[![](https://badge.imagelayers.io/plugins/drone-docker:latest.svg)](https://imagelayers.io/?images=plugins/drone-docker:latest 'Get your own badge on imagelayers.io')

Drone plugin to execute ThoughtWorks Gauge test scripts during a build.

## Docker

Build the container using `make`:

```
make deps docker
```

### Example

```sh
docker run -i --privileged -v $(pwd):/drone/src plugins/drone-gauge-java <<EOF
{
    "repo": {
        "clone_url": "git://github.com/drone/drone",
        "owner": "drone",
        "name": "drone",
        "full_name": "drone/drone"
    },
    "system": {
        "link_url": "https://beta.drone.io"
    },
    "build": {
        "number": 22,
        "status": "success",
        "started_at": 1421029603,
        "finished_at": 1421029813,
        "message": "Update the Readme",
        "author": "johnsmith",
        "author_email": "john.smith@gmail.com"
        "event": "push",
        "branch": "master",
        "commit": "436b7a6e2abaddfd35740527353e78a227ddcb2c",
        "ref": "refs/heads/master"
    },
    "workspace": {
        "root": "/drone/src",
        "path": "/drone/src/github.com/drone/drone"
    },
    "vargs": {
        // TODO: Commands here
    }
}
EOF
```
