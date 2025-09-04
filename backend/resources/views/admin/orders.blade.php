@extends('layouts.adminlayout')

@php
    use App\Models\User;
@endphp
@section('content')
    <div class="row">
        <div class="col-md-10 offset-md-1">
            <div class="card">
                <div class="card-header pb-0 p-3">
                    <h6 class="mb-2">Manage Orders</h6>
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Total (₦)</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php
                                $i = 1;
                            @endphp

                            @foreach($orders as $order)
                                @php
                                    $items = json_decode($order->items, true);
                                    $user = User::find($order->user_id);
                                    if ($user) {
                                        $customername = $user->name;

                                    }else {
                                        $customername = "";
                                    }

                                @endphp
                                @foreach($items as $item)
                                    <tr>
                                        <td>{{ $i++ }}</td>
                                        <td>{{ $customername }}</td>
                                        <td>{{ $item['name'] }}</td>
                                        <td>{{ $item['quantity'] }}</td>
                                        <td>₦{{ number_format($order->amount, 2) }}</td>
                                        <td>{{ $order->created_at->format('Y-m-d') }}</td>
                                        <td>
                                            @if($order->status === 'paid')
                                                <span class="badge bg-success">Completed</span>
                                            @elseif($order->status === 'pending')
                                                <span class="badge bg-warning">Pending</span>
                                            @else
                                                <span class="badge bg-danger">{{ ucfirst($order->status) }}</span>
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                            @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


@endsection