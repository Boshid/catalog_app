import 'dart:async';
import 'dart:convert';
import 'dart:developer' as developer;

import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final appTitle = 'Список товаров';
    return MaterialApp(
      title: appTitle,
      theme: ThemeData(
        primaryColor: Colors.white,
      ),
      home: HomeCatalog(title: appTitle),
    );
  }


}

class HomeCatalog extends StatelessWidget {
  final String title;

  HomeCatalog({Key key, this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: FutureBuilder<List<ItemCard>>(
          future: fetchCatalog(),
          builder: (context, snapshot) {
            if (snapshot.hasError) print(snapshot.error);

            return snapshot.hasData
                ? ItemCardsList(itemCards: snapshot.data)
                : Center(child: CircularProgressIndicator());
          },
        ));
  }
}

class ItemCardsList extends StatelessWidget {
  final List<ItemCard> itemCards;

  ItemCardsList({Key key, this.itemCards}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      physics: BouncingScrollPhysics(),
      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2,),

      // padding: EdgeInsets.all(2.5),
      itemCount: itemCards.length,
      itemBuilder: (context, index) {
        return GridTileBar(
            title: Container(
              padding: EdgeInsets.only(bottom: 5),
              constraints: BoxConstraints.expand(
                height: 120,
                width: 150,),
              // clipBehavior: Clip.antiAlias,
              child: Image.network(
                  itemCards[index].image,
                  fit: BoxFit.cover,
                  errorBuilder: (BuildContext context, Object exception, StackTrace stackTrace) {
                    developer.log(
                        'Exception occurred during image loading from ' +
                            itemCards[index].image + ' : ' + exception.toString());
                    return Text('Error');
              },
                frameBuilder: (BuildContext context, Widget child, int frame,
                    bool wasSynchronouslyLoaded) {
                  if (wasSynchronouslyLoaded) {
                    return child;
                  }
                  return AnimatedOpacity(
                    child: child,
                    opacity: frame == null ? 0 : 1,
                    duration: const Duration(seconds: 1),
                    curve: Curves.easeOut,
                  );
                },
              ),
            ),
            subtitle: RichText(
              text: TextSpan(
                children: <TextSpan>[
                  TextSpan(
                    text: itemCards[index].article + '\n',
                    style: TextStyle(color: Colors.grey[400]),
                  ),
                  TextSpan(
                    text: itemCards[index].name + '\n',
                    style: TextStyle(color: Colors.grey[700]),
                  ),
                  TextSpan(
                      text: itemCards[index].price + ' руб.',
                      style: TextStyle(
                          color: Colors.black, fontWeight: FontWeight.bold)),
                ],
              ),
            ));
      },
    );
  }
}


Future<List<ItemCard>> fetchCatalog() async {
  final response = await http.get('https://d-element.ru/test_api.php');

  if (response.statusCode == 200) {
  return compute(parseCatalog, response.body);
  } else {
    formFetchException(response);
    throw Exception();
  }

}

void formFetchException(http.Response response) {
  developer.log(
      'Exception occurred while fetching data from '
      + response.request.url.toString() + ': ' + response.body.toString(),
      error: response,
      time: DateTime.now(),
  );
}

List<ItemCard> parseCatalog(String responseBody) {
  final parsed = jsonDecode(responseBody)['items'].cast<Map<String, dynamic>>();

  return parsed.map<ItemCard>((json) => ItemCard.fromJson(json)).toList();
}

class ItemCard {
  final int id;
  final String name;
  final String price;
  final String article;
  final String image;

  ItemCard({this.id, this.name, this.price, this.article, this.image});

  factory ItemCard.fromJson(Map<String, dynamic> json) {
    return ItemCard(
      id: json['id'] as int,
      name: json['name'] as String,
      price: json['price'] == null ? '0' : json['price'].toString(),
      article: json['article'] as String,
      image: json['image'] as String,
    );
  }
}
