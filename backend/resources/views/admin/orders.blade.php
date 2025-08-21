@extends('layouts.adminlayout')


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
                            $orders = [
                                [
                                    'id' => 1,
                                    'customer' => 'John Doe',
                                    'product' => 'Coca Cola 50cl',
                                    'quantity' => 3,
                                    'total' => 900,
                                    'order_date' => '2025-08-10',
                                    'status' => 'Completed'
                                ],
                                [
                                    'id' => 2,
                                    'customer' => 'Jane Smith',
                                    'product' => 'Pepsi 50cl',
                                    'quantity' => 2,
                                    'total' => 560,
                                    'order_date' => '2025-08-12',
                                    'status' => 'Pending'
                                ],
                                [
                                    'id' => 3,
                                    'customer' => 'Michael Johnson',
                                    'product' => 'Sprite 35cl',
                                    'quantity' => 5,
                                    'total' => 1250,
                                    'order_date' => '2025-08-15',
                                    'status' => 'Cancelled'
                                ],
                            ];
                        @endphp

                        @foreach($orders as $order)
                            <tr>
                                <td>{{ $order['id'] }}</td>
                                <td>{{ $order['customer'] }}</td>
                                <td>{{ $order['product'] }}</td>
                                <td>{{ $order['quantity'] }}</td>
                                <td>₦{{ number_format($order['total'], 2) }}</td>
                                <td>{{ $order['order_date'] }}</td>
                                <td>
                                    @if($order['status'] === 'Completed')
                                        <span class="badge bg-success">{{ $order['status'] }}</span>
                                    @elseif($order['status'] === 'Pending')
                                        <span class="badge bg-warning">{{ $order['status'] }}</span>
                                    @else
                                        <span class="badge bg-danger">{{ $order['status'] }}</span>
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