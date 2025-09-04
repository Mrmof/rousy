@extends('layouts.adminlayout')


@section('content')
    
  
<div class="row">

    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Sales Records</h6>
            </div>
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price (₦)</th>
                            <th>Quantity Sold</th>
                            <th>Quantity Stock</th>
                            <th>Created At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        @php
                            $sales = [
                                [
                                    'id' => 1,
                                    'name' => 'Coca Cola 50cl',
                                    'price' => 300,
                                    'quantity_sold' => 25,
                                    'quantity_stock' => 75,
                                    'created_at' => '2025-08-10',
                                    'status' => 'Completed'
                                ],
                                [
                                    'id' => 2,
                                    'name' => 'Pepsi 50cl',
                                    'price' => 280,
                                    'quantity_sold' => 18,
                                    'quantity_stock' => 60,
                                    'created_at' => '2025-08-12',
                                    'status' => 'Pending'
                                ],
                                [
                                    'id' => 3,
                                    'name' => 'Sprite 35cl',
                                    'price' => 250,
                                    'quantity_sold' => 30,
                                    'quantity_stock' => 45,
                                    'created_at' => '2025-08-15',
                                    'status' => 'Completed'
                                ],
                            ];
                        @endphp
    
                        @foreach($sales as $sale)
                            <tr>
                                <td>{{ $sale['id'] }}</td>
                                <td>{{ $sale['name'] }}</td>
                                <td>₦{{ number_format($sale['price'], 2) }}</td>
                                <td>{{ $sale['quantity_sold'] }}</td>
                                <td>{{ $sale['quantity_stock'] }}</td>
                                <td>{{ $sale['created_at'] }}</td>
                                <td>
                                    @if($sale['status'] === 'Completed')
                                        <span class="badge bg-success">{{ $sale['status'] }}</span>
                                    @else
                                        <span class="badge bg-warning">{{ $sale['status'] }}</span>
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