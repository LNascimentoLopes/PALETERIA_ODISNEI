import React from "react";
import { View, FlatList, StyleSheet, StatusBar } from "react-native";
import Texto from "../../componentes/Texto";
import ItemServico from "./Item";

export default function Servicos({ itens }: any) {
  return (
    <View style={estilos.fundo}>
      <StatusBar barStyle="light-content" backgroundColor="#B8313A" />

      {/* ── Hero Header ── */}
      <View style={estilos.hero}>
        <View style={estilos.heroStripe} />
        <View style={estilos.heroContent}>
          <View style={estilos.heroBadge}>
            <Texto style={estilos.heroBadgeTexto}>— Cardápio —</Texto>
          </View>
          <Texto style={estilos.heroTitulo}>{itens.titulo}</Texto>
          <View style={estilos.heroDivider}>
            <View style={estilos.heroDividerLine} />
            <Texto style={estilos.heroDividerIcon}>✦</Texto>
            <View style={estilos.heroDividerLine} />
          </View>
          <Texto style={estilos.heroSubtitulo}>
            Clique em um serviço para ver detalhes
          </Texto>
        </View>
        <View style={estilos.heroWave} />
      </View>

      {/* ── Lista de Serviços ── */}
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
    backgroundColor: "#FDF8F0",
  },

  /* ─── Hero ─── */
  hero: {
    backgroundColor: "#B8313A",
    overflow: "hidden",
  },
  heroStripe: {
    height: 6,
    backgroundColor: "#E2C7A0",
  },
  heroContent: {
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 40,
    paddingHorizontal: 24,
  },
  heroBadge: {
    borderWidth: 1.5,
    borderColor: "#E2C7A0",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    marginBottom: 18,
  },
  heroBadgeTexto: {
    color: "#E2C7A0",
    fontSize: 11,
    letterSpacing: 3,
  },
  heroTitulo: {
    fontFamily: "FonteBold",
    fontSize: 42,
    color: "#FDF8F0",
    textAlign: "center",
    lineHeight: 48,
  },
  heroDivider: {
    flexDirection: "row",
    alignItems: "center",
    width: "55%",
    marginVertical: 16,
  },
  heroDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E2C7A0",
    opacity: 0.6,
  },
  heroDividerIcon: {
    color: "#E2C7A0",
    fontSize: 13,
    marginHorizontal: 10,
  },
  heroSubtitulo: {
    fontSize: 15,
    color: "#F0DDBB",
    fontStyle: "italic",
    letterSpacing: 0.5,
  },
  heroWave: {
    height: 28,
    backgroundColor: "#FDF8F0",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },

  /* ─── Lista ─── */
  lista: {
    paddingTop: 8,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
});