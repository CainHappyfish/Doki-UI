const customConsole = require('./consoleUtil.cjs');
const fs = require("fs");
const path = require("path");
const readline = require('readline');
const child_process = require("child_process");

console.log(customConsole('brightGreen', '创建新的组件'))

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('请输入组件名称（如button）：', answer => {
    const componentName = answer.trim();

    if (!/^[a-z]/.test(componentName)) {
        console.log(customConsole('brightRed', '应以小写字母开头！'));
        console.log(customConsole('brightRed', '组件创建结束。'));
        process.exit(0);
    }

    const absolutePath = path.resolve(`packages/components/${componentName}`);

    if (!componentName || componentName === '') {
        console.log(customConsole('brightRed', '组件名不能为空！'));
        process.exit(0);
    }
    if (componentName === 'template') {
        console.log(customConsole(['red', 'bright'], '组件名不能为 template ！'));
        process.exit(0);
    }

    if (fs.existsSync(absolutePath)) {
        console.log(customConsole(['red', 'bright'], `目录${absolutePath}已存在!`));
        console.log(customConsole(['red', 'bright'], `组件${componentName}已存在!`));
        process.exit(0);
    }

    const capitalizedComponentName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
    console.log(customConsole('brightBlue', '\n正在创建以下组件模版文件...'));
    console.log(customConsole('white', componentName));
    console.log(customConsole('white', `├─public`));
    console.log(customConsole('white', `├─styles`));
    console.log(customConsole('white', `    └─${componentName}.scss`));
    console.log(customConsole('white', `├─doki${capitalizedComponentName}.vue`));
    console.log(customConsole('white', `├─index.ts`));

    fs.mkdirSync(absolutePath, {recursive: true});

    const publicDir = path.join(absolutePath, 'public');
    fs.mkdirSync(publicDir, { recursive: true });
    const stylesDir = path.join(absolutePath, 'styles');
    fs.mkdirSync(stylesDir, { recursive: true });

    // 创建 scss 文件
    const scssFilePath = path.join(stylesDir, componentName + '.scss');
    const scssContent = `
.doki-${componentName} {

}
    `

    fs.writeFileSync(scssFilePath, scssContent);

    // 创建vue文件
    const componentTemplateName = `doki${capitalizedComponentName}.vue`;
    const vueFilePath = path.join(absolutePath, componentTemplateName);
    const vueContent = `
<script setup lang="ts">
  // 你可以在这里添加TypeScript代码
</script>

<template>
  <!-- 你可以在这里添加你的HTML模板 -->
  <div class="doki-${componentName}"></div>
</template>

<style scoped>
  
</style>
    `;

    fs.writeFileSync(vueFilePath, vueContent);

    // 创建 index.ts 文件
    const indexFilePath = path.join(absolutePath, 'index.ts');
    const indexContent = `
// 在这里导出组件
import doki${capitalizedComponentName} from "./doki${capitalizedComponentName}.vue";

export default doki${capitalizedComponentName}
    `;

    fs.writeFileSync(indexFilePath, indexContent);


    child_process.execSync(`git add ${absolutePath}`);
    // const json = JSON.parse(fs.readFileSync('package.json'));
    // json.scripts[`build:${componentName}`] = `vue-tsc && cross-env MODULE_NAME=${componentName} TITLE=${componentName} vite build`;
    // fs.writeFileSync(path.resolve('package.json'), JSON.stringify(json, null, 4), 'utf-8');
    console.log(customConsole('brightGreen', '创建组件成功!'));
    console.log(customConsole('brightBlue', `组件目录位于： ${absolutePath}`));

    process.exit(1);


})




