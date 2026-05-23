import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";

import Texto from "../../componentes/Texto";
import ItemServico from "./Item";

export default function Servicos({ itens }: any) {
  return (
    <View style={estilos.fundo}>
      <StatusBar barStyle="light-content" backgroundColor="#2A4F3D" />

      {/* Header */}
      <View style={estilos.header}>
        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
        <Texto style={estilos.subtitulo}>
          Clique em um serviço para ver detalhes
        </Texto>
      </View>

      {/* Services List */}
      <FlatList
        data={itens.lista}
        renderItem={({ item }) => <ItemServico servico={item} />}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={estilos.lista}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    backgroundColor: "#FFF0DD",
  },
  header: {
    backgroundColor: "#d64550",
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  titulo: {
    fontFamily: "FonteBold",
    fontSize: 24,
    color: "#D4AF37",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 14,
    color: "#FFF0DD",
    textAlign: "center",
    fontStyle: "italic",
  },
  lista: {
    paddingTop: 20,
    paddingBottom: 30,
  },
});
