<template>
  <footer class="footer" id="footer">
    <ul class="footer__social-list">
      <li class="footer__social-list-item">
        <a
          class="footer__social-list-link"
          href="https://github.com/xdesro/petition-tracker"
        >
          <IconGithub />
        </a>
      </li>
      <li class="footer__social-list-item">
        <a class="footer__social-list-link" href="https://twitter.com/xdesro">
          <IconTwitter />
        </a>
      </li>
    </ul>
    <p class="footer__text">
      This project is open-source, and the code and content live
      <a href="https://github.com/xdesro/petition-tracker">on GitHub</a>. All
      contributions and feedback are very welcome. Feel free to
      <a href="https://github.com/xdesro/petition-tracker/issues/new"
        >open an issue</a
      >, or
      <a href="https://twitter.com/messages/compose?recipient_id=2509306208"
        >reach out on Twitter</a
      >
      with any questions or concerns.
    </p>
    <a href="#">Go back to top.</a>
  </footer>
</template>

<script>
import IconGithub from "./icons/IconGithub";
import IconTwitter from "./icons/IconTwitter";
export default {
  components: {
    IconGithub,
    IconTwitter,
  },
};
</script>
