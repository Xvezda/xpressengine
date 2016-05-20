{{ XeFrontend::css('https://gitcdn.github.io/bootstrap-toggle/2.2.0/css/bootstrap-toggle.min.css')->before('https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css')->load() }}
{{ XeFrontend::js('https://gitcdn.github.io/bootstrap-toggle/2.2.0/js/bootstrap-toggle.min.js')->appendTo('head')->before('https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js')->load() }}
{{ XeFrontend::js('/assets/vendor/jqueryui/jquery-ui.js')->appendTo('head')->load() }}


<form id="__xe_toggleMenu_{{$typeIdable}}_{{$instanceId}}" class="form-horizontal" method="post" action="{{ route('manage.toggleMenu.setting') }}">
<input type="hidden" name="_token" value="{{ csrf_token() }}">
<input type="hidden" name="type" value="{{ $type }}">
@if($instanceId !== null)
    <input type="hidden" name="instanceId" value="{{ $instanceId }}">
@endif

    <div class="table-responsive item-setting">
        <table class="table">
            <colgroup>
                <col width="200">
                <col>
                <col>
            </colgroup>
            <tbody>
            @forelse($items as $key => $data)
                <tr>
                    <td>
                        <button class="btn handler"><i class="xi-bullet-point"></i></button>
                        <em class="item-title">{{ $data['item']::getName() }}</em>
                    </td>
                    <td>
                        <span class="item-subtext">{{ $data['item']::getDescription() }}</span>
                    </td>
                    <td>
                        <div class="xe-btn-toggle pull-right">
                            <label>
                                <span class="sr-only">toggle</span>
                                <input type="checkbox" name="items[]" value="{{ $key }}" @if($data['activated']) checked="checked" @endif />
                                <span class="toggle"></span>
                            </label>
                        </div>
                    </td>
                </tr>
            @empty
                <tr>
                    <td>{{ xe_trans('xe::noMenu') }}</td>
                </tr>
            @endforelse
            </tbody>
        </table>
    </div>

    <div class="panel-footer">
        <div class="pull-right">
            <button type="submit" class="btn btn-primary btn-lg">{{ xe_trans('xe::save') }}</button>
        </div>
    </div>

</form>

<script type="text/javascript">
    $(function() {
        // sortable 한 table 구현해야 함

        $('#__xe_toggleMenu_{{$typeIdable}}_{{$instanceId}}').submit(function () {
            $('<input>').attr('type', 'hidden').attr('name', 'redirect').val(location.href).appendTo(this);
        });
    });
</script>
