import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from "react-redux";
import { addToBasketAction } from "../../appData/cart/actions";
import { CART_DATA } from "../../data/cartData";

const Home = () => {
  const CartItem = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Button title="Add" onPress={() => onAdd(item)} />
    </View>
  );
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [data, setData] = useState(CART_DATA);

  const CartFooterItem = () => (
    <Button
      title="Go to basket"
      onPress={() => navigation.navigate('Basket')}
    />
  );

  const CartRenderItem = ({ item }) => <CartItem item={item} />;

  const onAdd = item => {
    dispatch(addToBasketAction(item));
  };
  return (
    <View>
      <FlatList
        ListFooterComponent={CartFooterItem}
        style={{ marginTop: 50 }}
        data={data}
        renderItem={CartRenderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});

export default Home;
