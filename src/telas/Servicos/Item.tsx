import React, { useState } from "react";
import { View, Modal, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

import Texto from "../../componentes/Texto";

export default function ItemServico({
  servico: { nome, descricao, detalhe, imagem },
}: any) {
  const [statusModal, setStatusModal] = useState(false);

  return (
    <View>
      {/* Service Card */}
      <Card mode="elevated" style={estilos.card}>
        <Card.Cover source={imagem} style={estilos.cardImagem} />
        <Card.Content style={estilos.cardConteudo}>
          <Texto style={estilos.nomeServico}>{nome}</Texto>
          <Texto style={estilos.descricaoServico}>{descricao}</Texto>
        </Card.Content>
        <Card.Actions style={estilos.cardAcoes}>
          <TouchableOpacity
            style={estilos.botaoDetalhes}
            onPress={() => setStatusModal(true)}
          >
            <Texto style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={18} color="#FFF0DD" />{" "}
              Ver Detalhes
            </Texto>
          </TouchableOpacity>
        </Card.Actions>
      </Card>

      {/* Details Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={statusModal}
        onRequestClose={() => setStatusModal(false)}
      >
        <View style={estilos.modalContainer}>
          <View style={estilos.modal}>
            {/* Close button */}
            <TouchableOpacity
              style={estilos.botaoFechar}
              onPress={() => setStatusModal(false)}
            >
              <Ionicons name="close-circle" size={32} color="#2A4F3D" />
            </TouchableOpacity>

            <Image
              source={imagem}
              style={estilos.imagemModal}
              resizeMode="cover"
            />

            <View style={estilos.modalConteudo}>
              <Texto style={estilos.modalNome}>{nome}</Texto>
              <Texto style={estilos.modalDescricao}>{descricao}</Texto>

              <View style={estilos.separador} />

              <View style={estilos.detalheContainer}>
                <Ionicons
                  name="calendar-outline"
                  size={16}
                  color="#D4AF37"
                  style={{ marginTop: 2 }}
                />
                <Texto style={estilos.modalDetalhe}>{detalhe}</Texto>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: "#d64550",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cardImagem: {
    height: 200,
    borderRadius: 0,
  },
  cardConteudo: {
    paddingTop: 14,
    paddingBottom: 8,
  },
  nomeServico: {
    fontFamily: "FonteBold",
    color: "#D4AF37",
    fontSize: 18,
    marginBottom: 6,
    lineHeight: 24,
  },
  descricaoServico: {
    color: "#FFF0DD",
    fontSize: 14,
    lineHeight: 22,
    fontStyle: "italic",
  },
  cardAcoes: {
    paddingBottom: 14,
    paddingHorizontal: 16,
  },
  botaoDetalhes: {
    backgroundColor: "#D4AF37",
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },
  textoBotao: {
    fontFamily: "FonteBold",
    color: "#d64550",
    fontSize: 14,
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modal: {
    backgroundColor: "#FFF0DD",
    width: "90%",
    maxHeight: "85%",
    borderRadius: 20,
    overflow: "hidden",
    elevation: 10,
  },
  botaoFechar: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    backgroundColor: "rgba(255,240,221,0.9)",
    borderRadius: 15,
  },
  imagemModal: {
    width: "100%",
    height: 200,
  },
  modalConteudo: {
    padding: 20,
  },
  modalNome: {
    fontFamily: "FonteBold",
    fontSize: 20,
    color: "#2A4F3D",
    marginBottom: 10,
    lineHeight: 26,
  },
  modalDescricao: {
    fontSize: 15,
    color: "#8B6B4D",
    lineHeight: 24,
    fontStyle: "italic",
    marginBottom: 12,
  },
  separador: {
    height: 1,
    backgroundColor: "#D4AF37",
    marginVertical: 12,
  },
  detalheContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  modalDetalhe: {
    fontSize: 14,
    color: "#d64550",
    lineHeight: 22,
    flex: 1,
  },
});
