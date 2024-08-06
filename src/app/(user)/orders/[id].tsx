import { View, Text, FlatList } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((order) => order.id.toString() === id);

  if (!order) {
    return <Text>Not found</Text>;
  }

  return (
    <View style={{ padding: 10, gap: 20 }}>
      <Stack.Screen options={{ title: `Order #${id}` }} />
      <OrderListItem order={order} />
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default OrderDetailsScreen;
