<template>
    <div class="row">
    <div class="col s12">
        <form action="/player">
            <div class="valign-wrapper">
                <div class="col s11">
                    <div class="input-field">
                        <input id="video-url" name="url" type="text" class="validate" v-bind:value="mediaUrl" placeholder="http://" />
                        <label for="video-url">URL</label>
                    </div>
        
                </div>
                <div class="col s1">
                    <button href="#!" class="modal-close btn-floating btn-small waves-effect waves-light red">
                        <i class="material-icons">play_arrow</i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    </div>
</template>

<script>
export default {
    props: ["mediaUrl"],
};
</script>