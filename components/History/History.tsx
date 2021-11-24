import React from "react";
import { SectionList, SectionListData } from "react-native";
import { Entry } from "../../models/Entry";
import { View } from "../Themed";
import HistoryDay from "./HistoryDay";
import HistoryItem from "./HistoryItem";

export default function History() {
  const data : SectionListData<Entry>[] = [
    {
      title: new Date(),
      data: [
        {
          id: 1,
          timestamp: new Date(),
          glucose: 123,
          insulin_bc: 2.1,
          insulin_br: 1.1,
          meal: "Jantar",
          meal_carbs: 101,
          annotations: '',
        },
        {
          id: 2,
          timestamp: new Date(),
          glucose: 125,
          insulin_bc: 2.1,
          insulin_br: 1.1,
          meal: "Almoço",
          meal_carbs: 101,
          annotations: '',
        },
        {
          id: 3,
          timestamp: new Date(),
          glucose: 125,
          insulin_bc: 2.2,
          insulin_br: 1.1,
          meal: "Desjejum",
          meal_carbs: 101,
          annotations: '',
        },
      ],
    },
  ];
  return (
    <SectionList
      sections={data}
      keyExtractor={ (item, index) => item.id ? String(item.id) : String(index) }
      renderItem={ ({ item }) => <HistoryItem entry={item} /> }
      renderSectionHeader={
        ({ section: { title }}) => <HistoryDay date={title} />
      }/>
  )
}