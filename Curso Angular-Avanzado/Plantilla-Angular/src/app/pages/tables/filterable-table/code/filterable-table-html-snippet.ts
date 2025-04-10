export const FILTERABLE_TABLE_HTML_SNIPPET = `  <mat-label class="f-s-14 f-w-600 d-block m-b-8 m-t-16">Filter</mat-label>
    <mat-form-field appearance="outline" class="w-100">
      <input matInput (keyup)="applyFilter($event)" placeholder="Ex. ium" #input>
    </mat-form-field>

    <div class="table-responsive m-t-30">
      <table mat-table [dataSource]="dataSource" class="w-100">
        <!-- Position Column -->
        <ng-container matColumnDef="assigned">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14 p-l-0">
            Assigned
          </th>
          <td mat-cell *matCellDef="let element" class="p-l-0">
            <div class="d-flex align-items-center">
              <img [src]="element.imagePath" alt="users" width="40" class="rounded-circle" />
              <div class="m-l-16">
                <h6 class=" f-s-14 f-w-600">
                  {{ element.uname }}
                </h6>
                <span class="f-s-14 f-s-12">
                  {{ element.position }}
                </span>
              </div>
            </div>
          </td>
        </ng-container>

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Name
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.productName }}
          </td>
        </ng-container>

        <!-- Weight Column -->
        <ng-container matColumnDef="priority">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Priority
          </th>
          <td mat-cell *matCellDef="let element">
            @if(element.priority == 'low') {
            <span class="bg-light-secondary text-secondary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'medium') {
            <span class="bg-light-primary text-primary rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'high') {
            <span class="bg-light-warning text-warning rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'critical') {
            <span class="bg-light-error text-error rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }

            @if(element.priority == 'moderate') {
            <span class="bg-light-success text-success rounded f-w-600 p-6 p-y-4 f-s-12">
              {{ element.priority | titlecase }}
            </span>
            }
          </td>
        </ng-container>

        <!-- Symbol Column -->
        <ng-container matColumnDef="budget">
          <th mat-header-cell *matHeaderCellDef class="f-w-600  f-s-14">
            Budget
          </th>
          <td mat-cell *matCellDef="let element" class="f-s-14">
            {{ element.budget }}k
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <!-- Row shown when there is no matching data. -->
        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell" colspan="4">
            No data matching the filter "{{ input.value }}"
          </td>
        </tr>
      </table>
    </div>
`;