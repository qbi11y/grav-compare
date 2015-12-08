var app = angular.module('Data', []);

app.factory('Applications', function() {
    var enviro = {};
    var applications = [{
        id: 1,
        name: 'BI Hadoop with Docker',
        description: 'Business Intelligence profile that defines infrastructure requirements for web, application and database server',
        environments: [{
            name: 'Enviro 1',
            resources: {
                network: {
                    bandwidth: 3,
                    inbound: 3,
                    outbound: 4,
                    qty: 4
                },
                servers: {
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
                },
                storage: {
                    qty: 100,
                    cloud: 3,
                    network: 4,
                    shared: 5
                }
            }
        }]

    }];
    
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
            applications.push(d);
        },

        setEnviro: function(d) {
            enviro = d;
        },

        getEnviro: function() {
            return enviro
        }
    }
})