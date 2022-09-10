<template>
  <v-container>
    <v-row v-for="question in this.questions" justify="center" class="my-5">
      <v-col justify="center">
        <v-card
          v-for="section in question.section"
          :width="card_width"
          class="my-2 mx-auto"
        >
          <div v-for="parts in section.parts">
            <v-toolbar
              v-if="parts.tag == 'header'"
              class="bg-teal-accent-3 header"
            >
              <v-card-title>{{ parts.text }}</v-card-title>
            </v-toolbar>
            <v-card-title
              v-if="parts.tag == 'title'"
              style="word-break: break-word"
            >
              {{ parts.text }}
            </v-card-title>
            <v-card-text v-if="parts.tag == 'label'">
              {{ parts.text }}
            </v-card-text>
            <v-card-item v-if="parts.tag == 'input'">
              <v-text-field
                :label="parts.id"
                :placeholder="parts.placeholder"
                variant="outlined"
                class="input-outline"
              ></v-text-field>
            </v-card-item>
            <v-list-item
              v-if="parts.tag == 'list' || parts.tag == 'list-title'"
            >
              <v-list-item-subtitle v-for="list in parts.list">
                <v-icon> mdi-chevron-triple-right </v-icon>
                {{ list }}
              </v-list-item-subtitle>
            </v-list-item>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  doc,
  Firestore,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";
// Logo
import logo from "../assets/logo.svg";
import { db } from "../firebase/firebase";
import { useDisplay } from "vuetify";

export default defineComponent({
  name: "Home",
  computed: {
    card_width() {
      if (useDisplay().xl.value) {
        return 1200;
      } else if (useDisplay().lg.value) {
        return 1000;
      } else if (useDisplay().md.value) {
        return 800;
      } else if (useDisplay().sm.value) {
        return 600;
      } else {
        return 300;
      }
    },
  },
  created() {
    this.getQuestion();
  },
  methods: {
    getQuestion: async function () {
      const querySnapshot = await getDocs(collection(db, "questions"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        console.dir(doc.data());
      });
      this.questions = querySnapshot.docs.map((doc) => doc.data());
      console.dir(this.questions);
    },
  },
  data() {
    return {
      questions: {},
      ecosystem: [
        {
          text: "vuetify-loader",
          href: "https://github.com/vuetifyjs/vuetify-loader",
        },
        {
          text: "github",
          href: "https://github.com/vuetifyjs/vuetify",
        },
        {
          text: "awesome-vuetify",
          href: "https://github.com/vuetifyjs/awesome-vuetify",
        },
      ],
      importantLinks: [
        {
          text: "Chat",
          href: "https://community.vuetifyjs.com",
        },
        {
          text: "Made with Vuetify",
          href: "https://madewithvuejs.com/vuetify",
        },
        {
          text: "Twitter",
          href: "https://twitter.com/vuetifyjs",
        },
        {
          text: "Articles",
          href: "https://medium.com/vuetify",
        },
      ],
      logo,
      whatsNext: [
        {
          text: "Explore components",
          href: "https://vuetifyjs.com",
        },
        {
          text: "Roadmap",
          href: "https://vuetifyjs.com/en/introduction/roadmap/",
        },
        {
          text: "Frequently Asked Questions",
          href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
        },
      ],
    };
  },
});
</script>
<style lang="scss">
.input {
  &-outline {
    padding-top: 5px;
  }
}
.header {
  overflow-wrap: break-word;
  word-break: break-word;
}
.title {
  overflow-wrap: break-word;
  word-break: break-word;
  overflow: inherit;
}
.v-card-title {
  word-break: normal !important;
  white-space: normal !important;
}
</style>
