@extends('layouts.adminlayout')


@section('content')
    
  <div class="row">
    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Manage Clients</h6>
            </div>
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Registered At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $users = [
                                [
                                    'id' => 1,
                                    'name' => 'John Doe',
                                    'email' => 'john@example.com',
                                    'phone' => '08012345678',
                                    'registered_at' => '2025-07-20',
                                    'status' => 'Active'
                                ],
                                [
                                    'id' => 2,
                                    'name' => 'Jane Smith',
                                    'email' => 'jane@example.com',
                                    'phone' => '08087654321',
                                    'registered_at' => '2025-07-25',
                                    'status' => 'Inactive'
                                ],
                                [
                                    'id' => 3,
                                    'name' => 'Michael Johnson',
                                    'email' => 'michael@example.com',
                                    'phone' => '08123456789',
                                    'registered_at' => '2025-08-01',
                                    'status' => 'Active'
                                ],
                            ];
                        @endphp

                        @foreach($users as $user)
                            <tr>
                                <td>{{ $user['id'] }}</td>
                                <td>{{ $user['name'] }}</td>
                                <td>{{ $user['email'] }}</td>
                                <td>{{ $user['phone'] }}</td>
                                <td>{{ $user['registered_at'] }}</td>
                                <td>
                                    @if($user['status'] === 'Active')
                                        <span class="badge bg-success">{{ $user['status'] }}</span>
                                    @else
                                        <span class="badge bg-danger">{{ $user['status'] }}</span>
                                    @endif
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>



   
    

@endsection