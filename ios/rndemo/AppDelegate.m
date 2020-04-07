/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLinkingManager.h>
#import "RNSplashScreen.h"
#import "JPUSHService.h"
#import <AdSupport/ASIdentifierManager.h>
@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                   moduleName:@"rndemo"
                                            initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
  if ([[UIDevice currentDevice].systemVersion floatValue]>=10.0) {
    JPUSHRegisterEntity*entity=[[JPUSHRegisterEntity alloc] init]; entity.types=UNAuthorizationOptionAlert|UNAuthorizationOptionBadge|UNAuthorizationOptionSound;
    [JPUSHService registerForRemoteNotificationConfig:entity delegate:self];
  }else if([[UIDevice currentDevice].systemVersion floatValue]>=8.0){
    [JPUSHService registerForRemoteNotificationTypes:(UNAuthorizationOptionBadge|UNAuthorizationOptionSound|UNAuthorizationOptionAlert) categories:nil];
  }else{
    [JPUSHService registerForRemoteNotificationTypes:(UNAuthorizationOptionBadge|UNAuthorizationOptionSound|UNAuthorizationOptionAlert) categories:nil];
  }
  NSString *advertisingId=[[[ASIdentifierManager sharedManager] advertisingIdentifier] UUIDString];
  [JPUSHService setupWithOption:launchOptions appKey:appKey channel:nil apsForProduction:isProduction advertisingIdentifier:advertisingId];
  NSURL *jsCodeLocation;
  
  [RNSplashScreen show];
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
            options:(NSDictionary<NSString*, id> *)options
{
  return [RCTLinkingManager application:application openURL:url options:options];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  [JPUSHService registerDeviceToken:deviceToken];
}
//ios 7
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler{
  //取得APNs标准信息内容
  [[NSNotificationCenter defaultCenter] postNotificationName:kJPFNetworkDidReceiveMessageNotification object:userInfo];
}

- (void)application:(UIApplication *)application didReceiveLocalNotification:(UILocalNotification *)notification{
  [[NSNotificationCenter defaultCenter] postNotificationName:kJPFNetworkDidReceiveMessageNotification object:notification.userInfo];
}
//ios 10
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger))completionHandler
{
  NSDictionary * userInfo=notification.request.content.userInfo;
  if ([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
    [JPUSHService handleRemoteNotification:userInfo];
    [[NSNotificationCenter defaultCenter] postNotificationName:kJPFNetworkDidReceiveMessageNotification object:userInfo];
  }
  completionHandler(UNNotificationPresentationOptionAlert);
  //选择是否提醒用户，有Badge、Sound、Alert三种类型可以选择设置
}

- (void) jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler{
  //required
  NSDictionary * userInfo=response.notification.request.content.userInfo;
  if ([response.notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
    [JPUSHService handleRemoteNotification:userInfo];
    [[NSNotificationCenter defaultCenter]postNotificationName:kJPFNetworkDidReceiveMessageNotification object:userInfo];
  }
  completionHandler();
}
//获取自定义消息内容
-(void)networkDidReceiveMessage:(NSNotification *)notification{
  NSDictionary *userInfo=[notification userInfo];
  NSString *content=[userInfo valueForKey:@"content"];
  NSDictionary *extras=[userInfo valueForKey:@"extras"];
  NSString *customizeField1=[extras valueForKey:@"123456"];
  NSLog(@"自定义:",userInfo);
}

@end
