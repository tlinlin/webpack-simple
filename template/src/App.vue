<template>
    <div id="app">
        <router-link to="/myrender">Go to myrender</router-link>
        <router-link to="/myslots">Go to myslots</router-link>
        <router-link to="/addRos">Go to addRos</router-link>
        <router-view></router-view>
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <myslots>
            <div slot="CPU">
                <h1>{{cpu}}</h1>
            </div>
            <div slot="GPU">
                <h2>GTX980Ti</h2>
            </div>
            <div slot="Memory">
                <h3>Kingston 32G</h3>
            </div>
            <div slot="Hard-drive">
                <h4>Samsung SSD 1T</h4>
            </div>
        </myslots>
        <input type="text" v-focus>
        <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
    </div>
</template>

<script>
import myslots from "./components/myslots.vue"
export default {
    name: 'app',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            cpu: 'Intel Core i10',
            message: "hello"
        }
    },
    components: {
        myslots
    },
    directives: {
        focus: {
            inserted: function (el) {
                // 聚焦元素
                el.focus()
            }
        },
        demo: {
            bind: function (el, binding, vnode) {
                const s = JSON.stringify;
                el.innerHTML =
                    'name: ' + s(binding.name) + '<br>' +
                    'value: ' + s(binding.value) + '<br>' +
                    'expression: ' + s(binding.expression) + '<br>' +
                    'argument: ' + s(binding.arg) + '<br>' +
                    'modifiers: ' + s(binding.modifiers) + '<br>' +
                    'vnode keys: ' + Object.keys(vnode).join(', ')
            }
        }
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2C3E50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42B983;
}
</style>
