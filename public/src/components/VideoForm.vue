<template>
    <form action="/player">
        <div class="valign-wrapper">
            <div class="col s11">
                <div class="input-field">
                    <input id="video-url" name="url" type="text" class="validate" value="" placeholder="http://" />
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
</template>

<script>
export default {};
</script>