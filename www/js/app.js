angular.module('cosmic.controllers', []);
angular.module('cosmic.directives', []);
angular.module('cosmic.services', []);

angular.module('cosmic', ['ionic', 'ngCordova', 'cosmic.controllers', 'cosmic.services','cosmic.directives'])

.run(function($ionicPlatform,$cordovaStatusbar,$localstorage,$animate,$state) {
	$animate.enabled(false);
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}
		if (window.StatusBar) {
			StatusBar.styleLightContent();
		}
		if ($localstorage.get('showStatusBar','true') === 'false'){
			$cordovaStatusbar.hide();
		}
		ionic.Platform.setGrade('c'); // remove advanced css feature
		$ionicPlatform.registerBackButtonAction(function (event) {
			if ($state.current.name==='app.playlists') {
				backAsHome.trigger(function(){
					console.log("Success: back as home");
				}, function(){
					console.log("Error: back as home");
				});
			} else {
				navigator.app.backHistory();
			}
		}, 100);
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider

        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/rubyonic/menu.html",
            controller: 'AppCtrl'
        })

        .state('app.login', {
            url: "/login",
            controller: 'SignInCtrl',
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/login.html"
                }
            }
        })

        .state('app.signup', {
            url: "/signup",
            controller: 'SignInCtrl',
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/signup.html"
                }
            }
        })

        .state('app.subscriptions', {
            url: "/subscriptions",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/subscriptions.html"
                }
            }
        })

        .state('app.tabs', {
            url: "/tabs",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/tabs.html"
                }
            }
        })

        .state('app.profile', {
            url: "/profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/profile.html"
                }
            }
        })

        .state('app.edit-profile', {
            url: "/edit-profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/edit-profile.html"
                }
            }
        })

        // .state('app.player', {
        //     url: "/player",
        //     views: {
        //         'menuContent': {
        //             templateUrl: "templates/player.html",
        //             controller: "PlayerCtrl"
        //         }
        //     },
        // })

        .state('app.library', {
            url: "/library",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/library.html"
                }
            }

        })

        .state('app.songs', {
            url: "/song",
            controller: 'titleCtrl',
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/songs.html"
                }
            }
        })

        // .state('app.artists', {
        //     url: "/artists",
        //     controller: 'ArtistsCtrl',
        //     views: {
        //         'menuContent': {
        //             templateUrl: "templates/rubyonic/artists.html"
        //         }
        //     }
        // })


        .state('app.trending', {
            url: "/trending",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/trending.html"
                }
            }
        })

        .state('app.forgot', {
            url: "/forgot",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/forgotpassword.html"
                }
            }
        })

        .state('app.psuccess', {
            url: "/psuccess",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/psuccess.html"
                }
            }
        })

        .state('app.forms', {
            url: "/forms",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/forms.html"
                }
            }
        })

        .state('app.settings', {
            url: "/settings",
            controller: "settingsCtrl",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/settings.html"
                }
            }
        })

        .state('app.search', {
            url: "/search",
            controller: "SearchCtrl",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/search.html"
                }
            }
        })

        .state('app.feed', {
            url: "/feed",
            controller: "FeedCtrl",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/feed.html"
                    //,

                }
            }
        })

        .state('app.chat-list', {
            url: "/chat-list",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/chat-list.html"
                }
            }
        })

        .state('app.chat-ui', {
            url: "/chat-ui",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/chat-ui.html"
                }
            }
        })

        .state('app.view-post', {
            url: "/view-post",
            views: {
                'menuContent': {
                    templateUrl: "templates/rubyonic/view-post.html"
                }
            }
        })


     //    .state('tab', {
	// 	url: "/tab",
	// 	abstract: true,
	// 	templateUrl: "templates/tabs.html",
	// })

	// .state('tab.playlists', {
	// 	url: '/playlists',
	// 	views: {
	// 		'tab-playlists': {
	// 			templateUrl: 'templates/playlists.html',
	// 			controller: 'PlaylistsCtrl'
	// 		}
	// 	}
	// })

	.state('app.playlists', {
        url: "/playlists",
        views: {
            'menuContent': {
                templateUrl: "templates/rubyonic/playlists.html",
                controller: 'PlaylistsCtrl'
            }
        }
      })

	.state('app.playlist-items', {
		url: '/playlists/user/:playlistId/:playlistName',
		views: {
            'menuContent': {
                templateUrl: 'templates/rubyonic/playlist-items.html',
                controller: 'PlaylistItemsCtrl'
            }
		}
	})

	.state('app.playlist-special', {
		url: '/playlists/special/:playlistId/:playlistName',
		views: {
			'menuContent': {
				templateUrl: 'templates/rubyonic/playlist-items.html',
				controller: 'PlaylistSpecialCtrl'
			}
		}
	})

	.state('app.artists', {
		url: '/artists',
		views: {
			'menuContent': {
				templateUrl: 'templates/rubyonic/artists.html',
                controller: 'ArtistsCtrl'
			}
		}
	})

	.state('app.titles', {
		url: '/artists/:artistId',
		views: {
			'menuContent': {
				templateUrl: 'templates/titles.html',
                    controller: 'TitlesCtrl'
			}
		}
	})

	// .state('tab.settings', {
	// 	url: '/settings',
	// 	views: {
	// 		'tab-settings': {
	// 			templateUrl: 'templates/settings.html',
	// 			controller: 'SettingsCtrl'
	// 		}
	// 	}
	// })

	.state('app.manage-directories', {
		url: 'manage-directories',
		views: {
			'menuContent': {
				templateUrl: 'templates/manage-directories.html',
                controller: 'ManageDirectoriesCtrl'
			}
		}
	})

	// .state('tab.search', {
	// 	url: '/search',
	// 	views: {
	// 		'tab-search': {
	// 			templateUrl: 'templates/search.html',
	// 			controller: 'SearchCtrl'
	// 		}
	// 	}
	// })

	.state('app.player', {
		url: '/player',
		templateUrl: 'templates/player.html',
		controller: 'PlayerCtrl'
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/feed');

})
.config(['$ionicConfigProvider', function($ionicConfigProvider) {
	//$ionicConfigProvider.scrolling.jsScrolling(false); // native scrolling
	$ionicConfigProvider.tabs.position('bottom'); // other values: top
	$ionicConfigProvider.tabs.style('standard');
	$ionicConfigProvider.spinner.icon('ios');
	$ionicConfigProvider.views.transition('ios');
	$ionicConfigProvider.views.swipeBackEnabled(true);
	$ionicConfigProvider.views.swipeBackHitWidth(60);
	ionic.Platform.isFullScreen = true;
}]);

function bootstrapAngular(){
	console.log('Bootstrap Angular App');
	var domElement = document.querySelector('body');
	angular.bootstrap(domElement, ['cosmic']);
}

if (document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1) {
	console.log("URL: Running in Cordova/PhoneGap");
	document.addEventListener("deviceready", bootstrapAngular, false);
} else {
	console.log("URL: Running in browser");
	document.addEventListener("DOMContentLoaded", bootstrapAngular, false);
}
