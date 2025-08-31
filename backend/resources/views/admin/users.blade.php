@extends('layouts.adminlayout')


@section('content')
    
  <div class="row">
    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Manage Users</h6>
            </div>
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>City</th>
                            <th>Registered At</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php $i = 1; @endphp
                        @foreach($users as $user)
                            <tr>
                                <td>{{ $i++ }}</td>
                                <td>{{ $user['name'] }}</td>
                                <td>{{ $user['email'] }}</td>
                                <td>{{ $user['phone'] }}</td>
                                <td>{{ $user['city'] }}</td>
                                <td>{{ $user['created_at'] }}</td>
                                <td>
                                    @if($user['status'] == 'active')
                                        <span class="badge bg-success">{{ $user['status'] }}</span>
                                    @else
                                        <span class="badge bg-danger">{{ $user['status'] }}</span>
                                    @endif
                                </td>
                                <td><a href="{{ route('admin.change.status', ['id' => $user["id"]]) }}" class="btn btn-primary">Change</a></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>



   
    

@endsection