import 'dart:convert';

import 'package:amazon_clone/common/widgets/bottom_bar.dart';
import 'package:amazon_clone/constants/error_handling.dart';
import 'package:amazon_clone/constants/utils.dart';
import 'package:amazon_clone/features/home/screens/home_screen.dart';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:amazon_clone/models/user.dart';
import 'package:provider/provider.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../../constants/global_variables.dart';
import '../../../provider/user_provider.dart';

class AuthService {
  //sign in a user
  void signIn({
    required BuildContext context,
    required String email,
    required String password,
  }) async {
    try {
      String url = '$host/api/signin';
      var headers = {'Content-Type': 'application/json'};
      final response = await http.post(
        Uri.parse(url),
        headers: headers,
        body: jsonEncode({
          "email": email,
          "password": password,
        }),
      );

      // ignore: use_build_context_synchronously
      httpErrorHandle(
          response: response,
          context: context,
          onSuccess: () async {
            SharedPreferences prefs = await SharedPreferences.getInstance();
            Provider.of<UserProvider>(context, listen: false)
                .setUser(response.body);
            await prefs.setString(
                'x-auth-token', jsonDecode(response.body)['token']);
            showSnackBar(context, "User Signed in successfully!");
            Navigator.pushNamedAndRemoveUntil(
                context, BottomBar.routeName, (route) => false);
          });
    } catch (error) {
      print("This is catch block of signin function");
      showSnackBar(context, error.toString());
    }
  }
  //sign in a user
  void getUserData({
     required BuildContext context,
    
  }) async {
    try {
        SharedPreferences prefs = await SharedPreferences.getInstance();
        String? token= prefs.getString('x-auth-token');
        // print("token fetched successfully! from shared preferences");
        // print(token);

        if(token==null){
          prefs.setString('x-auth-token','');
        }
        String url = '$host/api/verifytoken';
      var headers = {'Content-Type': 'application/json',
      'x-auth-token': token!
      };
      final tokenRes = await http.post(
        Uri.parse(url),
        headers: headers,
      );
      // print("Token response from verify token api is --->");
      // print(jsonDecode(tokenRes.body));

      var response=jsonDecode(tokenRes.body)['success'];
      if(response==true){
         String url = '$host/api/user';
         var headers = {'Content-Type': 'application/json',
      'x-auth-token': token
      };
         final userRes= await http.get(Uri.parse(url),headers:headers);

         print("User response from getUser api is --->");
      print(jsonDecode(userRes.body));

         var userProvider=Provider.of<UserProvider>(context,listen: false);
         userProvider.setUser(userRes.body);
      }
    } catch (error) {
      print("This is catch block of getUserData function");
      showSnackBar(context, error.toString());
    }
  }

  //signup a user
  void signUp({
    required BuildContext context,
    required String name,
    required String email,
    required String password,
  }) async {
    try {
      print("This is try block of sign up function");
      User user = User(
          id: "",
          name: name,
          email: email,
          password: password,
          address: "",
          type: "user",
          token: "",
          cart: []
          
          );

      String url = '$host/api/signup';
      var headers = {'Content-Type': 'application/json'};
      final response = await http.post(
        Uri.parse(url),
        headers: headers,
        body: user.toJson(),
      );
      // print("This is response");
      // print(jsonDecode(response.body));

      httpErrorHandle(
          response: response,
          context: context,
          onSuccess: () {
            showSnackBar(context,
                "Account created successfully! PLease login with the same credentials");
          });
    } catch (e) {
      print("This is catch block of signup function");
      showSnackBar(context, e.toString());
    }
  }
}
