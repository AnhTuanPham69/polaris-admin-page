import { Card, Text } from "@shopify/polaris";
import React from "react";

export default function CardDefault(props) {
  const { name } = props;
  return (
    <Card>
      <Text as="h2" variant="bodyMd">
        Content inside a {name || "Card"}
      </Text>
    </Card>
  );
}
