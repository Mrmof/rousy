@extends('layouts.adminlayout')


@section('content')
    
  

<div class="row mt-4">
    <!-- Products under this Category -->
    <div class="col-md-10 offset-md-1">
        <div class="card">
            <div class="card-header pb-0 p-3">
                <h6 class="mb-2">Products</h6>
            </div>
            <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity Sold</th>
                                <th>Quantity Stock</th>
                                <th>Created At</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            
                            
                        </tbody>
                    </table>
                
            </div>
        </div>
    </div>
</div>
   
    

@endsection