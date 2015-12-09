var app = angular.module('Data', []);

app.factory('Applications', function() {
    var enviro = {};
    var applications = [{
        id: 1,
        name: 'BI Hadoop with Docker',
        description: 'Business Intelligence profile that defines infrastructure requirements for web, application and database server',
        environments: [{
            name: 'Enviro 1',            
            network: [{
                bandwidth: 3,
                inbound: 3,
                outbound: 4,
                qty: 4
            }],
            servers: [{
                cores: 1,
                cycles: 4,
                localDisk: 3,
                mappingFactor: 4,
                os: 'Linux',
                qty: 4,
                ram: 2,
                usage: {
                    daily: 3,
                    monthly: 4,
                    total: 4
                }
            }],
            storage: [{
                qty: 100,
                cloud: 3,
                network: 4,
                shared: 5
            }]
            
        }]

    }];

    function buildResource(resource, resources) {
        console.log(resource, resources);
        var tmpResources = [];
        for (var n=0; n < resources.qty; n++) {            
            tmpResources.push(resources)
        }
        return tmpResources

    }
    
    return {
        getApps: function() {
            return applications
        },

        getApp: function(id) {
            for (obj in applications) {
                if (applications[obj].id == id) {
                    return applications[obj]
                }
            }
        },

        addApp: function(d) {
            console.log('application to breakdown ', d);
            var resources = {};
            var application = {
                id: d.id,
                name: d.name,
                description: d.description,
                environments: []
            } 

            for (obj in d) {
                if (obj == 'network' || obj == 'servers' || obj == 'storage') {
                    resources[obj] = buildResource(obj, d[obj]);                    
                }
            }

            for (var n=0; n < d.environments; n++) {
                application.environments.push(resources);
                application.environments[n].name = 'Environment ' + n;
            }

            applications.push(application);
            console.log('applications ', applications);                    
        },

        addEnviro: function(appID, d) {
            console.log('create enviro ', d);
            var environment = {
                name: d.name,
            }
            var resources = {};
            for (obj in d) {
                if (obj == 'network' || obj == 'servers' || obj == 'storage') {
                    environment[obj] = buildResource(obj, d[obj]);                    
                }
            }

            for (var n=0; n < applications.length; n++) {
                if (applications[n].id == appID) {
                    applications[n].environments.push(environment);
                    break;
                }
            }
            console.log('all applications ', applications);
        },

        setEnviro: function(d) {
            enviro = d;
        },

        getEnviro: function() {
            return enviro
        },

        removeEnviro: function(appID, d) {
            for (var n=0; n < applications.length;  n++) {
                if (applications[n].id == appID) {
                    for (var i=0; i < applications[n].environments.length; i++) {
                        if (applications[n].environments[i] == d) {
                            applications[n].environments.splice(i, 1);
                        }
                    }
                }
            }
        }
    }
})