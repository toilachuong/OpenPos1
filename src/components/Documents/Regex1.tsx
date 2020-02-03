import React, { Component } from "react";
import {
  ScrollView,
  Text,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import Editor, { EU } from "react-native-mentions-editor";
import { NavigationScreenProp, withNavigation } from "react-navigation";
import styles from "./styles";
import _ from "lodash";

interface IMentionsInputState {
  initialValue: String;
  showEditor: Boolean;
  message: any;
  messages: any[];
  clearInput: Boolean;
  showMentions: Boolean;
}
interface IMentionsInputProps {}

const users = [
  { id: 1, name: "Raza Dar", username: "Trie u", gender: "male" },
  { id: 3, name: "Atif Rashid", username: "Chuong", gender: "male" },
  { id: 4, name: "Peter Pan", username: "Hung", gender: "male" },
  { id: 5, name: "John Doe", username: "john.doe", gender: "male" },
  { id: 6, name: "Meesha Shafi", username: "meesha.shafi", gender: "female" }
];

const formatMentionNode = (txt: any, key: any) => (
  <Text key={key} style={styles.mention}>
    {txt}
  </Text>
);

export class MentionsInput extends Component<
  IMentionsInputProps,
  IMentionsInputState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialValue: "",
      showEditor: true,
      message: null,
      messages: [],
      clearInput: false,
      showMentions: false
    };
  }
  onChangeHandler = (message: any) => {
    this.setState({
      message,
      clearInput: false
    });
  };
  sendMessage = () => {
    if (!this.state.message) return;
    const messages = [this.state.message, ...this.state.messages];
    this.setState({
      messages,
      message: null,
      clearInput: true
    });
  };

  toggleEditor = () => {};

  onHideMentions = () => {
    this.setState({
      showMentions: false
    });
  };

  renderMessageListItem({ item: message, index: any }) {
    return (
      <View>
        <Text style={styles.messageText}>
          {EU.displayTextWithMentions(message.text, formatMentionNode)}
        </Text>
      </View>
    );
  }
  renderMessageList() {
    return (
      <FlatList
        style={styles.messageList}
        keyboardShouldPersistTaps={"always"}
        horizontal={false}
        inverted
        enableEmptySections={true}
        data={this.state.messages}
        keyExtractor={(message: any, index: Number) =>
          `${message.text}-${index}`
        }
        renderItem={rowData => {
          return this.renderMessageListItem(rowData);
        }}
      />
    );
  }
  goToProfile = (username: any) => {
    console.log("goto ser", username.props.children);
    const targetUser = users.filter((user: any) => {
      return user.username === username.props.children;
    });
    console.log("target User", targetUser);
  };

  renderMess = () => {
    //replace any time (alternative once, create a array of Name equal regex in other file)
    let arrUser = ["Trie u", "Chuong", "Hung"].join().replace(/,/g, "|");
    // let hiRegex = /(\bTrieu+\b)/gi;
    // console.log("CHECK", new RegExp(/(\bTrieu+\b)/gi));

    // if (!str.match(re)) {
    //   return false;
    // }
    if (this.state.message) {
      //create a Regex, (,gi,g ... append the second /)
      let re = new RegExp("(\\b" + arrUser + "+\\b)", "gi");
      console.log("check re", re);
      let parts = this.state.message.displayText.replace(/@/g, "").split(re);
      for (let i = 1; i < parts.length; i += 2) {
        //add style to part of string by create a new component
        parts[i] = (
          <Text
            onPress={() => this.goToProfile(parts[i])}
            style={{ color: "red" }}
            key={i}
          >
            {parts[i]}
          </Text>
        );
      }

      return <Text>{parts}</Text>;
      // const strColor = this.state.message.displayText.replace(
      //   `@${arrUser}`,
      //   <Text style={{ color: "red" }}>{arrUser}</Text>
      // );

      // return <Text>{strColor}</Text>;
    }
  };

  render() {
    console.log("check value input", this.state.message);
    return (
      <View style={styles.main}>
        <KeyboardAvoidingView behavior="position">
          <ScrollView style={styles.messageList}>
            {this.renderMessageList()}
          </ScrollView>
          {this.renderMess()}
          <Editor
            editorStyles={{
              input: { textAlignVertical: "center" }
            }}
            list={users}
            initialValue={this.state.initialValue}
            clearInput={this.state.clearInput}
            onChange={this.onChangeHandler}
            showEditor={this.state.showEditor}
            toggleEditor={this.toggleEditor}
            showMentions={this.state.showMentions}
            onHideMentions={this.onHideMentions}
            placeholder="Message..."
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}
