<script setup>
import Resources from "../../components/icons/Resources.vue";
import Entities from "../../components/icons/Entities.vue";
import Repositories from "../../components/icons/Repositories.vue";
import Processes from "../../components/icons/Processes.vue";
import Assemblers from "../../components/icons/Assemblers.vue";

</script>

<template>
    <nav class="navigation">
        <RouterLink to="resources" class="navigation__button">
            <Resources color="white"/>
            <span>Resources</span>
        </RouterLink>
        <RouterLink to="entities" class="navigation__button">
            <Entities color="white"/>
            <span>Entities</span>
        </RouterLink>
        <RouterLink to="repositories" class="navigation__button">
            <Repositories color="white"/>
            <span>Repositories</span>
        </RouterLink>
        <RouterLink to="assemblers" class="navigation__button">
            <Assemblers color="white"/>
            <span>Assemblers</span>
        </RouterLink>
        <RouterLink to="processes" class="navigation__button">
            <Processes color="white"/>
            <span>Processes</span>
        </RouterLink>
    </nav>
</template>

<style scoped>
.navigation {
    justify-content: center;
    align-items: center;
    background: black;
    padding: 20px;
    display: flex;
    color: white;
}

.navigation__button {
    transition: border-color 0.1s linear, background 0.1s linear;
    border: 1.5px solid transparent;
    background: transparent;
    justify-content: center;
    border-radius: 10px;
    align-items: center;
    padding: 10px 20px;
    display: flex;
    gap: 10px;
}

.navigation__button.router-link-active {
    border: 1.5px solid #444444;
    background: #111111;
}
</style>
