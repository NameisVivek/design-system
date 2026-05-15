<template>
    <table>
        <tbody>
            <tr>
                <td>Critical</td>
                <td><WtgStatus v-bind="$attrs" sentiment="critical" /></td>
            </tr>
            <tr>
                <td>Primary</td>
                <td><WtgStatus v-bind="$attrs" sentiment="primary" /></td>
            </tr>
            <tr>
                <td>Success</td>
                <td><WtgStatus v-bind="$attrs" sentiment="success" /></td>
            </tr>
            <tr>
                <td>Warning</td>
                <td><WtgStatus v-bind="$attrs" sentiment="warning" /></td>
            </tr>
            <tr>
                <td>Info</td>
                <td><WtgStatus v-bind="$attrs" sentiment="info" /></td>
            </tr>
            <tr>
                <td>Neutral</td>
                <td><WtgStatus v-bind="$attrs" sentiment="neutral" /></td>
            </tr>
        </tbody>
    </table>
</template>
<script setup lang="ts">
import { WtgStatus } from '@components';
</script>
