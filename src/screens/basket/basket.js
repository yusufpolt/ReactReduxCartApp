import React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { basketSelector } from "../../appData/cart/selectors";
import { styles } from "../basket/styles";
import { removeToBasketAction } from "../../appData/cart/actions";

const Basket = () => {
  const dispatch = useDispatch();
  const removeItem = item => {
    dispatch(removeToBasketAction(item));
  };
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.name}</Text>
      <Button title="remove" onPress={() => removeItem(item)} />
    </View>
  );
  const basket = useSelector(basketSelector);
  return (
    <FlatList
      data={basket}
      renderItem={renderItem}

    />
  );
};

export default Basket;
